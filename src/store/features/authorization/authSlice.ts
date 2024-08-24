import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeAuthSlice, TypeCurrentForm } from "../../types/types";
import Cookies from "js-cookie";
import { TypeRegistration } from "../../../features/forms/types/types";
import { setEmailCookies } from "../../../helpers/cookiesActions";

const cookiesEmail = Cookies.get("email");

const initialState: TypeAuthSlice = {
  currentForm: "emailForm",
  email: null,
  emailIsRemembered: cookiesEmail ?? false,
  password: null,
  passwordSafeness: 0,
  formData: null,
};

export const authSlice = createSlice({
  name: "authForms",
  initialState,
  reducers: {
    setCurrentForm: (state, action: PayloadAction<TypeCurrentForm>) => {
      state.currentForm = action.payload;
    },
    setEmail: (state, action: PayloadAction<string | null>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    rememberEmail: (state, action: PayloadAction<boolean>) => {
      state.emailIsRemembered = action.payload;
      if (state.email) setEmailCookies(state.email);
    },
    setFormData: (state, action: PayloadAction<TypeRegistration>) => {
      state.formData = action.payload;
    },
    setPasswordSafeness: (state, action: PayloadAction<number>) => {
      state.passwordSafeness = action.payload;
    },
  },
});

export const {
  setCurrentForm,
  setPasswordSafeness,
  rememberEmail,
  setFormData,
  setEmail,
} = authSlice.actions;

export default authSlice.reducer;
