import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TypeUser, TypeUserSlice } from "../types/types";
import Cookies from "js-cookie";
import { signInWithGoogle } from "../asyncThunks/signInWithGoogle";
import { createAccount } from "../asyncThunks/createAccount";
import { signInWithPassword } from "../asyncThunks/signInWithPassword";
import { updateUserPhoto } from "../asyncThunks/updateUserPhoto";
import { notify } from "../../helpers/notify";

const userCookie = Cookies.get("user");

const updateUserState = (state: TypeUserSlice, user: TypeUser | null) => {
  if (user) {
    state.user = user;
    state.userLoggedIn = true;
    state.profilePhoto = user.photoURL ?? null;
    Cookies.set("user", JSON.stringify(state.user));
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: userCookie ? JSON.parse(userCookie) : null,
    profilePhoto: userCookie ? JSON.parse(userCookie).photoURL : null,
    userLoggedIn: userCookie ? !!JSON.parse(userCookie) : false,
  },
  reducers: {
    setUser: (state, action: PayloadAction<TypeUser | null>) => {
      updateUserState(state, action.payload);
    },
    setProfilePhoto: (state, action: PayloadAction<string | null>) => {
      state.profilePhoto = action.payload;
      if (state.user) {
        state.user.photoURL = action.payload;
        Cookies.set("user", JSON.stringify(state.user));
      }
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
        if (action.payload) updateUserState(state, action.payload);
      })
      .addCase(createAccount.pending, (state) => {
        state.userLoggedIn = false;
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        if (action.payload) updateUserState(state, action.payload);
      })
      .addCase(createAccount.rejected, (state) => {
        updateUserState(state, null);
      })
      .addCase(signInWithPassword.pending, (state) => {
        state.userLoggedIn = false;
      })
      .addCase(signInWithPassword.fulfilled, (state, action) => {
        if (action.payload) updateUserState(state, action.payload);
      })
      .addCase(signInWithPassword.rejected, (state) => {
        updateUserState(state, null);
      })
      .addCase(updateUserPhoto.fulfilled, (state, action) => {
        state.profilePhoto = action.payload;
        if (state.user) {
          state.user.photoURL = action.payload;
          Cookies.set("user", JSON.stringify(state.user));
          notify("User photo has been successfully changed!");
        }
      })
      .addCase(updateUserPhoto.rejected, (state) => {
        updateUserState(state, null);
      });
  },
});

export const { setUser, setProfilePhoto, setUserLoggedIn } = userSlice.actions;

export default userSlice.reducer;
