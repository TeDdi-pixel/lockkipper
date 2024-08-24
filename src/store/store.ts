import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import authSlice from "./features/authorization/authSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
  },
});
