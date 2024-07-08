import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { RiUser3Line } from "react-icons/ri";
import { MdOutlineFileDownload, MdOutlineLock, MdLogin } from "react-icons/md";
import Cookies from "js-cookie";
import { setUser, setUserLoggedIn } from "../../store/slices/userSlice";
import { Dispatch } from "@reduxjs/toolkit";
export const optionList = [
  { id: 0, icon: <RiUser3Line />, text: "Account settings" },
  { id: 1, icon: <HiOutlineQuestionMarkCircle />, text: "Get help" },
  { id: 2, icon: <MdOutlineFileDownload />, text: "Get the app" },
];

const logOut = (dispatch: Dispatch) => {
  dispatch(setUser(null));
  Cookies.remove("user");
  if (!Cookies.get("user")) dispatch(setUserLoggedIn(false));
};

export const accountOptions = [
  { id: 0, icon: <MdOutlineLock />, text: "Lock now", func: null },
  { id: 1, icon: <MdLogin />, text: "Log out", func: logOut },
];
