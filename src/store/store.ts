import { configureStore } from "@reduxjs/toolkit";
import registerFormSlice from "./features/authorization/registerFormSlice";
import userSlice from "./features/user/userSlice";
import loginFormSlice from "./features/authorization/loginFormSlice";

export default configureStore({
  reducer: {
    loginForm: loginFormSlice,
    registerForm: registerFormSlice,
    user: userSlice,
  },
});
