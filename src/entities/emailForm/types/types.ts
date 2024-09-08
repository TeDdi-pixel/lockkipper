import { FieldValues, UseFormRegister } from "react-hook-form";

export type TypeProps = {
  setValue: (key: string, value: string) => void;
  register: UseFormRegister<FieldValues>;
};

export type DefaultRegister = {
  register: UseFormRegister<any>;
};
