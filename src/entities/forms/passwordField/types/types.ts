import { UseFormRegister } from "react-hook-form";
import { TypeRegistration } from "../../../../features/forms/types/types";

export type Register = UseFormRegister<TypeRegistration>;

export type PasswordInputProps = {
  register: Register;
  label: string;
  regKey: keyof TypeRegistration;
};
