import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../lib/firebase/config";
import { RootState, TypeMyAccountForm } from "../types/types";
import { doc } from "firebase/firestore";
import { setDisplayName, setUserEmail } from "../features/user/userSlice";
import { showError } from "../../helpers/toastify/error";
import { notify } from "../../helpers/toastify/notify";
import { updateUserName } from "../../shared/api/firebase/user/updateUserName";
import { updateUserEmail } from "../../shared/api/firebase/user/updateUserEmail";

export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async (
    { newDisplayName, newEmail }: TypeMyAccountForm,
    { getState, dispatch }
  ) => {
    const userSlice = getState() as RootState;
    const { user } = userSlice.user;

    if (!user) throw new Error("No user found. Please re-enter your account.");
    const { uid, displayName, email } = user;
    const docRef = doc(db, "users", uid);

    try {
      if (newDisplayName && newDisplayName !== displayName) {
        await updateUserName(docRef, newDisplayName);
        dispatch(setDisplayName(newDisplayName));
        notify("User name has been successfully changed!");
      }

      if (newEmail && newEmail !== email) {
        await updateUserEmail(docRef, newEmail);
        dispatch(setUserEmail(newEmail));
        notify("Email has been successfully changed!");
      }
    } catch (error) {
      console.log(error);
      showError(`${error}`);
      return undefined;
    }
  }
);
