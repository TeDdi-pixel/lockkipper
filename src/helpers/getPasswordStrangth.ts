import { Dispatch } from "@reduxjs/toolkit";
import { setPasswordSafeness } from "../store/features/authorization/registerFormSlice";

export const getPasswordStrength = (
  score: number,
  dispatch: Dispatch<any>,
  setProgressColor: (color: string) => void
): void => {
  switch (score) {
    case 0:
      dispatch(setPasswordSafeness(10));
      setProgressColor("danger");
      break;
    case 1:
      dispatch(setPasswordSafeness(25));
      setProgressColor("danger");
      break;
    case 2:
      dispatch(setPasswordSafeness(50));
      setProgressColor("warning");
      break;
    case 3:
      dispatch(setPasswordSafeness(70));
      setProgressColor("success");
      break;
    case 4:
      dispatch(setPasswordSafeness(100));
      setProgressColor("success");
      break;
    default:
      break;
  }
};
