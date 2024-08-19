import { updateEmail, updateProfile } from "firebase/auth";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../lib/firebase/config";
import { RootState, TypeMyAccountForm } from "../types/types";
import { doc, updateDoc } from "firebase/firestore";
import { setDisplayName, setUserEmail } from "../features/user/userSlice";
import { showError } from "../../helpers/toastify/error";
import { notify } from "../../helpers/toastify/notify";

export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async (userData: TypeMyAccountForm, { getState, dispatch }) => {
    const userSlice = getState() as RootState;
    const user = userSlice.user.user;

    if (!user) return;

    const docRef = doc(db, "users", user.uid);
    try {
      if (!auth.currentUser) {
        showError("No user is currently signed in. Re-enter your account");
        throw new Error("No user is currently signed in.");
      }

      if (
        userData.newDisplayName &&
        userData.newDisplayName !== user.displayName
      ) {
        await updateProfile(auth.currentUser, {
          displayName: userData.newDisplayName,
        });
        await updateDoc(docRef, { displayName: userData.newDisplayName });
        dispatch(setDisplayName(userData.newDisplayName));
        notify("User name has been successfully changed!");
      }

      if (userData.newEmail && userData.newEmail !== user.email) {
        await updateEmail(auth.currentUser, userData.newEmail);
        await updateDoc(docRef, { email: userData.newEmail });
        dispatch(setUserEmail(userData.newEmail));
        notify("Email has been successfully changed!");
      }
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        if (error.message === "No user is currently signed in.") {
          showError("Email:  No user found. Please re-enter into your account");
        } else {
          showError(error.message);
        }
      } else {
        showError("An unknown error occurred");
      }
      return null;
    }
  }
);
