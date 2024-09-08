import {
  CircularProgress,
  FormControl,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";
import { Control, Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "../../store/types/types";

type Props = {
  control: Control;
  name: string;
  label: string;
  options: { id: number | string; name: string }[];
  defaultValue?: string;
};

const SelectOption = ({
  control,
  name,
  label,
  options,
  defaultValue = '',
}: Props) => {
  const { itemLoading } = useSelector((state: RootState) => state.vault);
  return (
    <FormControl fullWidth>
      <Controller
        control={control}
        defaultValue={defaultValue}
        name={name}
        render={({ field: { value, onChange } }) => (
          <TextField
            select
            label={label}
            value={value ?? defaultValue}
            size="small"
            onChange={(event) => onChange(event.target.value)}
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
          >
            {options.map((option: { id: number | string; name: string }) => (
              <MenuItem key={option.id} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    </FormControl>
  );
};

export default SelectOption;
