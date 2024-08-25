import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import usePassword from "../../../../hooks/usePassword";
import { PasswordInputProps } from "../types/types";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const PasswordInput = ({ register, label, regKey }: PasswordInputProps) => {
  const { showPassword, handleShowPassword, handleMouseDownPassword } =
    usePassword();
  return (
    <OutlinedInput
      required
      type={showPassword ? "text" : "password"}
      label={label}
      {...register(regKey)}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            onClick={handleShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
    />
  );
};

export default PasswordInput;
