import { TextField } from "@mui/material";
import { Register } from "../../../../entities/forms/passwordField/types/types";

const AccountNameField = ({ register }: { register: Register }) => {
  return (
    <TextField
      label="Account name"
      type="Text"
      size="small"
      {...register("displayName")}
      required={true}
    />
  );
};

export default AccountNameField;
