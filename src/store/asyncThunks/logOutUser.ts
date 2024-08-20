import { createAsyncThunk } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase/config";
import { showError } from "../../helpers/toastify/error";

export const logOutUser = createAsyncThunk(
  "user/logOutUser",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);

      return true;
    } catch (error) {
      showError(`Failed to log out: ${error}`);
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
