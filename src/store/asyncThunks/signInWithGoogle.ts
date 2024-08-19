import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithPopup } from "firebase/auth";
import { auth, db, googleProvider } from "../../services/firebase-config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { showError } from "../../helpers/notify";
import { setUser } from "../slices/userSlice";

export const signInWithGoogle = createAsyncThunk(
  "user/signInWithGoogle",
  async (_, { dispatch }) => {
    try {
      //Getting user from Firestore Authentication database
      const userCredential = await signInWithPopup(auth, googleProvider);
      const fullUser = userCredential.user;

      const user = {
        uid: fullUser.uid,
        email: fullUser.email,
        displayName: fullUser.displayName,
        photoURL: fullUser.photoURL,
      };
      //Transfer the user to users collection in Firestore Database
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) await setDoc(docRef, user);

      dispatch(setUser(user));

      return user;
    } catch (error) {
      console.log("Error signing in with Google: ", error);
      showError(`${error}`);
      return undefined;
    }
  }
);
