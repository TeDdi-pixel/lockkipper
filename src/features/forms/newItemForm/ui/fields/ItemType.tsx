import { Box, FormControl, MenuItem, TextField } from "@mui/material";
import { Control, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setFormType } from "../../../../../store/features/vault/vaultSlice";
import { formTypeOptions } from "../../config/formTypeOptions";
import { TypeForm } from "../../types/types";
import { RootState } from "../../../../../store/types/types";
import { isEmptyObj } from "../../../../../helpers/isEmptyObj";
import { useEffect, useState } from "react";

export const ItemType = ({ control }: { control: Control }) => {
  const dispatch = useDispatch();
  const { vaultItem } = useSelector((state: RootState) => state.vault);
  const standardValue = formTypeOptions[0].name;
  const [formType, setFormTypeValue] = useState(standardValue);

  useEffect(() => {
    if (!isEmptyObj(vaultItem)) {
      setFormTypeValue(vaultItem.formType || standardValue);
    }
  }, [vaultItem]);
  return (
    <Box
      sx={{ maxWidth: "377px", marginLeft: "1rem", marginBottom: "1.25rem" }}
    >
      <FormControl fullWidth>
        <Controller
          control={control}
          name="formType"
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              value={value ?? formType}
              size="small"
              select
              label="What type of item is this?"
              onChange={(event) => {
                const selectedValue = event.target.value;
                if (isEmptyObj(vaultItem)) onChange(selectedValue);
                dispatch(setFormType(selectedValue as TypeForm));
              }}
            >
              {formTypeOptions.map((option) => (
                <MenuItem value={option.name} key={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
      </FormControl>
    </Box>
  );
};
