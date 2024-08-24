import { TextField } from "@mui/material";
import useEmailField from "../../../hooks/useEmailField";
import { FieldValues, UseFormRegister } from "react-hook-form";

type TypeProps = {
  setValue: (key: string, value: string) => void;
  register: UseFormRegister<FieldValues>;
};

const EmailField = ({ setValue, register }: TypeProps) => {
  const { emailLabel, handleEmailChange } = useEmailField(setValue);
  return (
    <TextField
      type="email"
      label="Email"
      value={emailLabel}
      {...register("email")}
      onChange={handleEmailChange}
      required
      size="small"
    />
  );
};

export default EmailField;
