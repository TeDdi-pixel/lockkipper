import { FormControl } from "@mui/material";
import PasswordLabel from "../../../../entities/forms/passwordField/ui/PasswordLabel";
import PasswordInput from "../../../../entities/forms/passwordField/ui/PasswordInput";
import { Register } from "../../../../entities/forms/passwordField/types/types";
import { ChangeEvent } from "react";

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  register: Register;
};

export const PasswordField = ({ register, onChange }: Props) => {
  return (
    <FormControl variant="outlined" size="small" onChange={onChange}>
      <PasswordLabel label="Master-password" />
      <PasswordInput
        register={register}
        label="Master-password"
        regKey="password"
      />
    </FormControl>
  );
};
