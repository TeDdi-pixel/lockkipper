import { MdLogin, MdOutlineLock } from "react-icons/md";
import { logOutUser } from "../../../store/asyncThunks/logOutUser";
import { AppDispatch } from "../../../store/types/types";

const onLogOut = (dispatch: AppDispatch) => {
  dispatch(logOutUser());
};

export const actionOptions = [
  { id: 0, icon: <MdOutlineLock />, text: "Lock now", func: null },
  { id: 1, icon: <MdLogin />, text: "Log out", func: onLogOut },
];
