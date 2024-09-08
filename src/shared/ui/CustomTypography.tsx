import { Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

type TypeProps = TypographyProps & {
  text?: string;
  children?: ReactNode;
  color?: any;
};

const CustomTypography = ({
  fontSize = "14px",
  fontWeight = "500",
  fontFamily = "Montserrat",
  textTransform = "initial",
  textAlign,
  text,
  children,
  color,
}: TypeProps) => {
  return (
    <Typography
      sx={{
        color: color,
        textAlign: textAlign,
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontWeight: fontWeight,
        textTransform: textTransform,
      }}
    >
      {text ?? children}
    </Typography>
  );
};

export default CustomTypography;
