import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../types/types";
import { showError } from "../../helpers/toastify/error";
import { db } from "../../lib/firebase/config";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { notify } from "../../helpers/toastify/notify";

export const createFolder = createAsyncThunk(
  "vault/createFolder",
  async (folder: string, { rejectWithValue, getState }) => {
    const state = getState() as RootState;
    const { user } = state.user;

    if (folder.trim() === "") {
      return rejectWithValue("Folder name cannot be empty.");
    }

    if (!user) {
      return rejectWithValue("No user found. Please re-enter your account.");
    }

    try {
      const foldersRef = collection(db, `vaults/${user.uid}/folders`);
      const folders = await getDocs(foldersRef);

      const alreadyExists = folders.docs.some((doc) => doc.id === folder);

      if (alreadyExists) {
        return rejectWithValue("Folder already exists.");
      }

      const folderRef = doc(foldersRef, folder);
      await setDoc(folderRef, {});

      notify(`Folder "${folder}" has been successfully created!`);
    } catch (error) {
      const errorMessage = `Failed to create folder: ${error}`;
      showError(errorMessage);
      console.log(error);
      return rejectWithValue(errorMessage);
    }
  }
);
