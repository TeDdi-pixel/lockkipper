import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TypeRegistration } from "../../widgets/forms/startPageForms/types/types";
import { TypeRegisterForm } from "../types/types";

const initialState: TypeRegisterForm = {
  formData: null,
  passwordSafeness: 0,
  goToCreateForm: false,
};

export const registerFormSlice = createSlice({
  name: "registerForm",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<TypeRegistration>) => {
      state.formData = action.payload;
    },
    setPasswordSafeness: (state, action: PayloadAction<number>) => {
      state.passwordSafeness = action.payload;
    },
    setGoToCreateForm: (state, action: PayloadAction<boolean>) => {
      state.goToCreateForm = action.payload;
    },
  },
});

export const { setFormData, setPasswordSafeness, setGoToCreateForm } =
  registerFormSlice.actions;

export default registerFormSlice.reducer;
