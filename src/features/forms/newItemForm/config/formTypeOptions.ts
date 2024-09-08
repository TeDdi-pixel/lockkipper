import { TypeForm } from "../types/types";

export type TypeOption = {
  id: number | string;
  name: TypeForm;
};
export const formTypeOptions: TypeOption[] = [
  { id: 0, name: "Login" },
  { id: 1, name: "Card" },
  // { id: 2, name: "Identity" },
  { id: 3, name: "Secure note" },
];
