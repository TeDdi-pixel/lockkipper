import { TextField } from "@mui/material";
import { Register } from "../../../../entities/forms/passwordField/types/types";

const EmailField = ({ register }: { register: Register }) => {
  return (
    <TextField
      label="Email"
      type="email"
      size="small"
      {...register("email")}
      required={true}
    />
  );
};

export default EmailField;
