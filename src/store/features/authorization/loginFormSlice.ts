import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TypeLoginForm } from "../../types/types";
import Cookies from "js-cookie";
import { setEmailCookies } from "../../../helpers/cookiesActions";

const cookiesEmail = Cookies.get("email");

const initialState: TypeLoginForm = {
  email: null,
  emailEntered: false, //flag for changing forms from email to password
  emailIsRemembered: cookiesEmail ?? false,
  password: null,
};

export const loginFormSlice = createSlice({
  name: "loginForm",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string | null>) => {
      state.email = action.payload;
    },
    setEmailEntered: (state, action: PayloadAction<boolean>) => {
      state.emailEntered = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    rememberEmail: (state, action: PayloadAction<boolean>) => {
      state.emailIsRemembered = action.payload;
      if (state.email) setEmailCookies(state.email);
    },
  },
});

export const { setEmail, setEmailEntered, setPassword, rememberEmail } =
  loginFormSlice.actions;

export default loginFormSlice.reducer;
