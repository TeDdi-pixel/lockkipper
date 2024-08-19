import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase-config";
import { showError } from "../../helpers/notify";
import { setUser } from "../slices/userSlice";

type TypeFormData = {
  email: string;
  password: string;
};
export const signInWithPassword = createAsyncThunk(
  "user/signInWithPassword",
  async (formData: TypeFormData, { dispatch }) => {
    const { email, password } = formData;

    if (!email || !password) {
      throw new Error("Email and password are required.");
    }

    try {
      const { user: fullUser } = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

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
