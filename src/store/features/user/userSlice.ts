import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TypeUser, TypeUserSlice } from "../../types/types";
import Cookies from "js-cookie";
import { signInWithGoogle } from "../../asyncThunks/signInWithGoogle";
import { createAccount } from "../../asyncThunks/createAccount";
import { signInWithPassword } from "../../asyncThunks/signInWithPassword";
import { updateUserPhoto } from "../../asyncThunks/updateUserPhoto";
import { setUserCookies } from "../../../helpers/cookiesActions";
import { notify } from "../../../helpers/toastify/notify";
import { logOutUser } from "../../asyncThunks/logOutUser";

const userCookie = Cookies.get("user");

const updateUserState = (state: TypeUserSlice, user: TypeUser | null) => {
  if (user) {
    state.user = user;
    state.userLoggedIn = true;
    state.profilePhoto = user.photoURL ?? null;
    setUserCookies(user);
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
      state.user && updateUserState(state, action.payload);
    },
    setProfilePhoto: (state, action: PayloadAction<string | null>) => {
      state.profilePhoto = action.payload;
      if (state.user) {
        state.user.photoURL = action.payload;
        setUserCookies(state.user);
      }
    },
    setUserLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.userLoggedIn = action.payload;
    },
    setUserEmail: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.email = action.payload;
        setUserCookies(state.user);
      }
    },
    setDisplayName: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.displayName = action.payload;
        setUserCookies(state.user);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      //signInWithGoogle
      .addCase(signInWithGoogle.pending, (state) => {
        state.userLoggedIn = false;
      })
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        if (action.payload) updateUserState(state, action.payload);
      })
      //createAccount
      .addCase(createAccount.pending, (state) => {
        state.userLoggedIn = false;
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        if (action.payload) updateUserState(state, action.payload);
      })
      .addCase(createAccount.rejected, (state) => {
        updateUserState(state, null);
      })
      //signInWithPassword
      .addCase(signInWithPassword.pending, (state) => {
        state.userLoggedIn = false;
      })
      .addCase(signInWithPassword.fulfilled, (state, action) => {
        if (action.payload) updateUserState(state, action.payload);
      })
      .addCase(signInWithPassword.rejected, (state) => {
        updateUserState(state, null);
      })
      //updateUserPhoto
      .addCase(updateUserPhoto.fulfilled, (state, action) => {
        state.profilePhoto = action.payload;
        if (state.user) {
          state.user.photoURL = action.payload;
          setUserCookies(state.user);
          notify("User photo has been successfully changed!");
        }
      })
      .addCase(updateUserPhoto.rejected, (state) => {
        updateUserState(state, null);
      })
      //logOutUser
      .addCase(logOutUser.fulfilled, (state, action) => {
        if (action.payload) {
          Cookies.remove("user");
          state.userLoggedIn = false;
          state.user = false;
          state.profilePhoto = false;
        }
      });
  },
});

export const {
  setUser,
  setProfilePhoto,
  setUserLoggedIn,
  setUserEmail,
  setDisplayName,
} = userSlice.actions;

export default userSlice.reducer;
