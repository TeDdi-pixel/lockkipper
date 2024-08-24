import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import EmailField from "../ui/EmailField";
import EmailCheckbox from "../ui/EmailCheckbox";

export const EmailFormField = ({
  register,
  setValue,
}: {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}) => {
  return (
    <>
      <EmailField register={register} setValue={setValue} />
      <EmailCheckbox register={register} setValue={setValue} />
    </>
  );
};
