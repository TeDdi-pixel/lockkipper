import { TextField, TextFieldProps } from "@mui/material";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { ReactNode } from "react";

type TypeProps = TextFieldProps & {
  inputStyles?: Record<string, string | number>;
  registerKey:
    | "email"
    | "password"
    | "displayName"
    | "exampleRequired"
    | "emailIsRemembered"
    | "reEnteredPassword"
    | "hint";
  register: UseFormRegister<FieldValues>;
  children?: ReactNode;
  value: string | null;
};

const CustomTextField = ({
  size = "small",
  label,
  variant = "outlined",
  required = false,
  inputStyles = {
    fontSize: "14px",
    fontWeight: 500,
    fontFamily: "Montserrat",
  },
  registerKey,
  register,
  type,
  children,
  value,
  onChange,
}: TypeProps) => {
  return (
    <TextField
      type={type}
      size={size}
      label={label}
      variant={variant}
      required={required}
      InputLabelProps={{
        sx: inputStyles,
      }}
      inputProps={{ maxLength: 32 }}
      value={value}
      {...register(registerKey)}
      onChange={onChange}
    >
      {children}
    </TextField>
  );
};

export default CustomTextField;
