import { ColorPaletteProp } from "@mui/joy/styles/types";
import { LinearProgressPropsColorOverrides } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";

export type TypeProgressColor =
  | OverridableStringUnion<ColorPaletteProp, LinearProgressPropsColorOverrides>
  | undefined;
