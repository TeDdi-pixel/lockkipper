import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithPopup } from "firebase/auth";
import { auth, db, googleProvider } from "../../services/firebase-config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Cookies from "js-cookie";
import { TypeUser } from "../types/types";

export const signInWithGoogle = createAsyncThunk<TypeUser | null>(
  "user/signInWithGoogle",
  async (_) => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;
      if (!user) return;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      let updatedUser;

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
        updatedUser = docSnap.data();
      }

      Cookies.set("user", JSON.stringify(updatedUser), { expires: 7 });
      return updatedUser;
    } catch (error) {
      console.log("Error signing in with Google:", error);
      return null;
    }
  }
);
