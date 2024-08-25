import { FormControl } from "@mui/material";
import PasswordLabel from "./PasswordLabel";
import { Register } from "../types/types";
import PasswordInput from "./PasswordInput";

export const PasswordField = ({ register }: { register: Register }) => {
  return (
    <FormControl variant="outlined" size="small">
      <PasswordLabel label="Master-password" />
      <PasswordInput
        label="Master-password"
        register={register}
        regKey="password"
      />
    </FormControl>
  );
};
