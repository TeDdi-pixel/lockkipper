import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithPopup } from "firebase/auth";
import { auth, db, googleProvider } from "../../services/firebase-config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { TypeUser } from "../types/types";
import Cookies from "js-cookie";
import { showError } from "../../helpers/notify";

export const signInWithGoogle = createAsyncThunk(
  "user/signInWithGoogle",
  async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;
      if (!user) return;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      let firebaseUser;

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          hint: null,
          password: null,
        });
      } else {
        firebaseUser = docSnap.data() as TypeUser;

        if (firebaseUser.photoURL) {
          Cookies.set("user", JSON.stringify(firebaseUser));
        }
      }

      return firebaseUser;
    } catch (error) {
      console.log("Error signing in with Google:", error);
      showError(`${error}`);
      return null;
    }
  }
);
