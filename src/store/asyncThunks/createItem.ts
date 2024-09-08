import { createAsyncThunk } from "@reduxjs/toolkit";
import { showError } from "../../helpers/toastify/error";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase/config";
import { RootState } from "../types/types";
import { TypeInnerFormData } from "../../features/forms/newItemForm/types/types";
import { v4 as uuidv4 } from "uuid";
import { notify } from "../../helpers/toastify/notify";

export const createItem = createAsyncThunk(
  "vault/createItem",
  async (item: TypeInnerFormData, { rejectWithValue, getState }) => {
    const state = getState() as RootState;
    const { user } = state.user;
    const { folder } = item;

    if (!user) {
      throw new Error("No user found. Please re-enter your account.");
    }

    const folderName = folder.trim() ? folder : "No folder";
    const formType = item.formType || "Login";
    const newItem = {
      ...item,
      folder: folderName,
      formType,
    };

    try {
      const itemId = uuidv4();
      const docRef = doc(db, `vaults/${user.uid}/folders/${folderName}`);
      await updateDoc(docRef, {
        [itemId]: newItem,
      });
      notify(`Item has been successfully created!`);
    } catch (error) {
      showError(`Failed to log out: ${error}`);
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
