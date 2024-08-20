import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TypeLoginForm } from "../../types/types";

const initialState: TypeLoginForm = {
  email: null,
  emailEntered: false,
  emailIsRemembered: false,
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
    },
  },
});

export const { setEmail, setEmailEntered, setPassword, rememberEmail } =
  loginFormSlice.actions;

export default loginFormSlice.reducer;
