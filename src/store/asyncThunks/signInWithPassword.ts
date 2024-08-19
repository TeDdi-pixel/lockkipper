import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase-config";
import { showError } from "../../helpers/notify";
import { setUser } from "../slices/userSlice";
import { TypeLoginForm } from "../types/types";

export const signInWithPassword = createAsyncThunk(
  "user/signInWithPassword",
  async (formData: TypeLoginForm, { dispatch }) => {
    const { email, password } = formData;

    if (!email || !password) {
      throw new Error("Email and password are required.");
    }

    try {
      //Adding user to Firestore Authentication database
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const fullUser = userCredential.user;
      //Getting only useful data
      const user = {
        uid: fullUser.uid,
        email: fullUser.email,
        displayName: fullUser.displayName,
        photoURL: fullUser.photoURL,
      };

      dispatch(setUser(user));

      return user;
    } catch (error) {
      console.log("Error signing in with email and password: ", error);
      showError(`${error}`);
      return undefined;
    }
  }
);
