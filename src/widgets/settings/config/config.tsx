import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { RiUser3Line } from "react-icons/ri";
import { MdOutlineFileDownload, MdOutlineLock, MdLogin } from "react-icons/md";
import Cookies from "js-cookie";
import {
  setProfilePhoto,
  setUser,
  setUserLoggedIn,
} from "../../../store/slices/userSlice";
import { Dispatch } from "@reduxjs/toolkit";
export const optionList = [
  {
    id: 0,
    icon: <RiUser3Line />,
    text: "Account settings",
    direction: "/settings/account",
  },
  {
    id: 1,
    icon: <HiOutlineQuestionMarkCircle />,
    text: "Get help",
    direction: "/settings",
  },
  {
    id: 2,
    icon: <MdOutlineFileDownload />,
    text: "Get the app",
    direction: "/settings",
  },
];

const logOut = (dispatch: Dispatch) => {
  Cookies.remove("user");
  if (!Cookies.get("user")) {
    dispatch(setUserLoggedIn(false));
    dispatch(setUser(null));
    dispatch(setProfilePhoto(null));
  }
};

export const accountOptions = [
  { id: 0, icon: <MdOutlineLock />, text: "Lock now", func: null },
  { id: 1, icon: <MdLogin />, text: "Log out", func: logOut },
];
