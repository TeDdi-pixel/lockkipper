import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  TypeForm,
  TypeInnerFormData,
} from "../../../features/forms/newItemForm/types/types";
import { setVaultItem } from "../../asyncThunks/setVaultItem";

export const vaultSlice = createSlice({
  name: "vault",
  initialState: {
    formIsOpen: false,
    currentForm: null,
    formType: "Login",
    vaultItem: {},
    itemLoading: false,
    vaultItemId: null as string | null,
  },
  reducers: {
    openForm: (state, action) => {
      if (action.payload) {
        state.formIsOpen = true;
        state.currentForm = action.payload;
      }
    },
    closeForm: (state) => {
      state.formIsOpen = false;
      state.currentForm = null;
      state.formType = "Login";
      state.vaultItem = {};
    },
    setFormType: (state, action: PayloadAction<TypeForm>) => {
      state.formType = action.payload;
    },
    setItemValue: (state, action: PayloadAction<{ [key: string]: string }>) => {
      const newData = action.payload;
      state.vaultItem = { ...state.vaultItem, ...newData };
    },
    setVaultItemId: (state, action: PayloadAction<string | null>) => {
      state.vaultItemId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setVaultItem.pending, (state) => {
        state.itemLoading = true;
      })
      .addCase(
        setVaultItem.fulfilled,
        (state, action: PayloadAction<TypeInnerFormData>) => {
          if (action.payload) {
            state.vaultItem = action.payload;
            state.itemLoading = false;
          }
        }
      );
  },
});

export const {
  openForm,
  closeForm,
  setFormType,
  setItemValue,
  setVaultItemId,
} = vaultSlice.actions;

export default vaultSlice.reducer;
