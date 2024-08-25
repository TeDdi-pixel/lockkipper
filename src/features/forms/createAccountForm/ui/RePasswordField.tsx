import { FormControl } from "@mui/material";
import PasswordLabel from "../../../../entities/forms/passwordField/ui/PasswordLabel";
import PasswordInput from "../../../../entities/forms/passwordField/ui/PasswordInput";
import { Register } from "../../../../entities/forms/passwordField/types/types";
import { ChangeEvent } from "react";

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  register: Register;
};

export const RePasswordField = ({ onChange, register }: Props) => {
  return (
    <FormControl variant="outlined" size="small" onChange={onChange}>
      <PasswordLabel label="Re-enter the master password" />
      <PasswordInput
        regKey="reEnteredPassword"
        register={register}
        label="Re-enter the master password"
      />
    </FormControl>
  );
};
