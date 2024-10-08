import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../types/types";
import { getItem } from "../../shared/api/firebase/vault/getItem";

export const setVaultItem = createAsyncThunk(
  "vault/setVaultItem",
  async (itemId: string, { getState }) => {
    const state = getState() as RootState;
    const { user } = state.user;

    if (!user) {
      throw new Error("No user found. Please re-enter your account.");
    }

    const vaultItem = await getItem(itemId, user.uid);

    return vaultItem;
  }
);
