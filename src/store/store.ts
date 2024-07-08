import { configureStore } from "@reduxjs/toolkit";
import loginFormSlice from "./slices/loginFormSlice";
import registerFormSlice from "./slices/registerFormSlice";
import userSlice from "./slices/userSlice";

export default configureStore({
  reducer: {
    loginForm: loginFormSlice,
    registerForm: registerFormSlice,
    user: userSlice,
  },
});
