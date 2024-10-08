import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  TypeForm,
  TypeInnerFormData,
} from "../../../features/forms/newItemForm/types/types";
import { setVaultItem } from "../../asyncThunks/setVaultItem";
import { TypeCellsData } from "../../../widgets/contentTable/config/config";

export const vaultSlice = createSlice({
  name: "vault",
  initialState: {
    formIsOpen: false,
    currentForm: null,
    formType: "Login",
    vaultItem: {},
    itemsLoading: false,
    cellsData: [] as TypeCellsData[],
    itemLoading: false,
    vaultItemId: null as string | null,
    filter: "All folders" as string,
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
    deleteCellItem: (state, action: PayloadAction<number>) => {
      const newCells = state.cellsData.filter(
        (cell) => cell.id !== action.payload
      );
      state.cellsData = newCells;
    },
    setCellsData: (state, action: PayloadAction<TypeCellsData[]>) => {
      state.cellsData = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
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
  setCellsData,
  setFilter,
  deleteCellItem,
} = vaultSlice.actions;

export default vaultSlice.reducer;
