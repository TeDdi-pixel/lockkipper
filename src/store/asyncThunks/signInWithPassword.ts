import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../services/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { RootState, TypeUser } from "../types/types";
import { showError } from "../../helpers/notify";

export const signInWithPassword = createAsyncThunk(
  "user/signInWithPassword",
  async (_, { getState }) => {
    const loginFormSlice = getState() as RootState;
    const loginForm = loginFormSlice.loginForm;

    if (!loginForm.email || !loginForm.password) return;

    try {
      if (loginForm.password === null) return;
      showError('Your password is not right')
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginForm.email,
        loginForm.password
      );

      const user = userCredential.user;

      if (!user) return;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.data()) return;

      const firebaseUser = docSnap.data() as TypeUser;

      return firebaseUser;
    } catch (error) {
      console.log("Error signing in with Google:", error);
      showError(`${error}`);
      return null;
    }
  }
);
