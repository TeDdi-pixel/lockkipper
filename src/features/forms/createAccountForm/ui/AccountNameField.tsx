import { TextField } from "@mui/material";
import { Register } from "../../../../entities/forms/passwordField/types/types";

type Props = { register: Register; required?: boolean };
const AccountNameField = ({ register, required = true }: Props) => {
  return (
    <TextField
      label="Account name"
      type="Text"
      size="small"
      {...register("displayName")}
      required={required}
    />
  );
};

export default AccountNameField;
