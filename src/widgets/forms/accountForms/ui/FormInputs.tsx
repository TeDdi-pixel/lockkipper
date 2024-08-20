import { TextField } from "@mui/material";
import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";

type Props = {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
};

const FormInputs = ({ register, setValue }: Props) => {
  return (
    <div className="flex flex-col w-[380px] gap-[31px]">
      <TextField
        label="User name"
        size="small"
        type="text"
        fullWidth
        {...register("newDisplayName")}
        inputProps={{ maxLength: 32 }}
        onChange={(e) => setValue("newDisplayName", e.target.value)}
      />
      <TextField
        type="email"
        label="Email"
        size="small"
        fullWidth
        inputProps={{ maxLength: 45 }}
        {...register("newEmail")}
        onChange={(e) => setValue("newEmail", e.target.value)}
      />
    </div>
  );
};

export default FormInputs;
