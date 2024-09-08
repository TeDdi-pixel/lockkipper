import {
  CircularProgress,
  InputAdornment,
  TextField,
} from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { RootState } from "../../store/types/types";
import { useSelector } from "react-redux";

type Props = {
  register: UseFormRegister<any>;
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  type?: "text";
  multiline?: boolean;
  rows?: number;
  defaultValue?: string;
};

export const CustomTextField = ({
  register,
  name,
  label,
  required = false,
  placeholder,
  type = "text",
  multiline,
  rows,
  defaultValue,
}: Props) => {
  const { itemLoading } = useSelector((state: RootState) => state.vault);
  
  return (
    <TextField
      placeholder={placeholder}
      label={label}
      fullWidth
      defaultValue={itemLoading ? "" : defaultValue}
      rows={rows}
      multiline={multiline}
      type={type}
      required={required}
      size="small"
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        endAdornment: itemLoading ? (
          <InputAdornment position="start">
            <CircularProgress size={20} />
          </InputAdornment>
        ) : null,
      }}
      {...register(name)}
    />
  );
};
