import {
  CircularProgress,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import usePassword from "../../hooks/usePassword";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { UseFormRegister } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "../../store/types/types";

type Props = {
  register: UseFormRegister<any>;
  label: string;
  name: string;
  defaultValue?: string;
};

const SafeTextField = ({ register, label, name, defaultValue = "" }: Props) => {
  const { showPassword, handleMouseDownPassword, handleShowPassword } =
    usePassword();
  const { itemLoading } = useSelector((state: RootState) => state.vault);

  return (
    <FormControl fullWidth>
      <TextField
        label={label}
        size="small"
        defaultValue={itemLoading ? "" : defaultValue}
        {...register(name)}
        type={showPassword ? "text" : "password"}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {itemLoading ? (
                <CircularProgress size={20} />
              ) : (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};

export default SafeTextField;
