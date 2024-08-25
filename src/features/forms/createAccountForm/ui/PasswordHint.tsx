import { TextField } from "@mui/material";
import { Register } from "../../../../entities/forms/passwordField/types/types";

const PasswordHint = ({ register }: { register: Register }) => {
  return (
    <TextField
      label="Master password hint"
      type="text"
      size="small"
      {...register("hint")}
    />
  );
};

export default PasswordHint;
