import { Control, UseFormRegister } from "react-hook-form";

export type TypeRegisterControl = {
  register: UseFormRegister<any>;
  control: Control;
};

export type TypeForm = "Login" | "Card" | "Identity" | "Secure note";

export type TypeFormData = {
  formType: TypeForm;
  itemName: string;
  notes?: string;
  folder: string;
};

export type TypeLoginForm = TypeFormData & {
  userName?: string;
  password?: string;
  url?: string;
};

export type TypeCardForm = TypeFormData & {
  cardHolderName?: string;
  brand?: string;
  number?: number;
  expirationMonth?: string;
  expirationYear?: string;
  cvv?: number;
};

export type TypeInnerFormData = TypeLoginForm | TypeCardForm;
