import { Dispatch } from "@reduxjs/toolkit";
import { MdLogin, MdOutlineLock } from "react-icons/md";
import Cookies from "js-cookie";
import {
  setProfilePhoto,
  setUser,
  setUserLoggedIn,
} from "../../../store/features/user/userSlice";

const logOut = (dispatch: Dispatch) => {
  Cookies.remove("user");
  if (!Cookies.get("user")) {
    dispatch(setUserLoggedIn(false));
    dispatch(setUser(null));
    dispatch(setProfilePhoto(null));
  }
};

export const actionOptions = [
  { id: 0, icon: <MdOutlineLock />, text: "Lock now", func: null },
  { id: 1, icon: <MdLogin />, text: "Log out", func: logOut },
];
