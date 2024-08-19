import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase/config";
import { setUser } from "../features/user/userSlice";
import { showError } from "../../helpers/toastify/error";

type TypeFormData = {
  email: string;
  password: string;
};
export const signInWithPassword = createAsyncThunk(
  "user/signInWithPassword",
  async (data: TypeFormData, { dispatch }) => {
    const { email, password } = data;

    if (!email || !password) {
      throw new Error("Email and password are required.");
    }

    try {
      const { user: fullUser } = await signInWithEmailAndPassword(auth, email, password);

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
