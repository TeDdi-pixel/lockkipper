import { Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

type TypeProps = TypographyProps & {
  text?: string | undefined;
  children?: ReactNode;
};

const CustomTypography = ({
  fontSize = "14px",
  fontWeight = "400",
  fontFamily = "Montserrat",
  textTransform = "initial",
  textAlign,
  text,
  children,
}: TypeProps) => {
  return (
    <Typography
      sx={{
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
