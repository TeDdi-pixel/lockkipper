import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import authSlice from "./features/authorization/authSlice";
import vaultSlice from "./features/vault/vaultSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
    vault: vaultSlice,
  },
});
