import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TypeUser, TypeUserSlice } from "../types/types";
import Cookies from "js-cookie";
import { signInWithGoogle } from "../asyncThunks/signInWithGoogle";
import { createAccount } from "../asyncThunks/createAccount";

const userCookie = Cookies.get("user");

const initialState: TypeUserSlice = {
  user: userCookie ? JSON.parse(userCookie) : null,
  profilePhoto: userCookie ? JSON.parse(userCookie).photoURL : null,
  userLoggedIn: userCookie ? !!JSON.parse(userCookie) : false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TypeUser | null>) => {
      state.user = action.payload;
    },
    setProfilePhoto: (state, action: PayloadAction<string>) => {
      state.profilePhoto = action.payload;
    },
    setUserLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.userLoggedIn = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInWithGoogle.pending, (state) => {
        state.userLoggedIn = false;
      })
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        if (action.payload) {
          state.profilePhoto = action.payload.photoURL;
          state.user = action.payload;
          state.userLoggedIn = true;
        }
      })
      .addCase(createAccount.pending, (state) => {
        state.userLoggedIn = false;
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        if (action.payload) {
          state.profilePhoto = action.payload.photoURL;
          state.user = action.payload;
          state.userLoggedIn = true;
        }
      })
      .addCase(createAccount.rejected, (state) => {
        state.user = null;
        state.profilePhoto = null;
        state.userLoggedIn = false;
      });
  },
});

export const { setUser, setProfilePhoto, setUserLoggedIn } = userSlice.actions;

export default userSlice.reducer;
