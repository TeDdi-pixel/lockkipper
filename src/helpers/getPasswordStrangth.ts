import { Dispatch } from "@reduxjs/toolkit";
import { setPasswordSafeness } from "../store/features/authorization/registerFormSlice";
import { OverridableStringUnion } from "@mui/types";
import { ColorPaletteProp } from "@mui/joy/styles/types";
import { LinearProgressPropsColorOverrides } from "@mui/material";

export const getPasswordStrength = (
  score: number,
  dispatch: Dispatch<any>,
  setProgressColor: (color: OverridableStringUnion<ColorPaletteProp, LinearProgressPropsColorOverrides> | undefined) => void
): void => {
  switch (score) {
    case 0:
    case 1:
      dispatch(setPasswordSafeness(10));
      setProgressColor("danger");
      break;
    case 2:
      dispatch(setPasswordSafeness(50));
      setProgressColor("warning");
      break;
    case 3:
    case 4:
      dispatch(setPasswordSafeness(100));
      setProgressColor("success");
      break;
    default:
      break;
  }
};
