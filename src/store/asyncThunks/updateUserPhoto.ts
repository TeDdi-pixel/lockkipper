import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../lib/firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { RootState } from "../types/types";
import { uploadProfilePhoto } from "../../helpers/uploadUserPhoto";
import { downloadUserPhoto } from "../../helpers/downloadUserPhoto";
import { showError } from "../../helpers/toastify/error";

export const updateUserPhoto = createAsyncThunk(
  "user/updateUserPhoto",
  async (newPhotoURL: string, { getState }) => {
    const state = getState() as RootState;
    const user = state.user.user;

    if (!user) {
      throw new Error("User is not logged in");
    }

    try {
      const docRef = doc(db, "users", user.uid);

      await uploadProfilePhoto(user.uid, newPhotoURL);

      const photoURL = await downloadUserPhoto(user.uid);

      if (!photoURL) throw new Error("Error while photo downloading");

      await updateDoc(docRef, { photoURL: photoURL });

      return photoURL;
    } catch (error) {
      console.error(error);
      showError(`${error}`);
      return null;
    }
  }
);
