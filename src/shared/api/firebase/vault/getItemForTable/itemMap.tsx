import {
  TypeCardForm,
  TypeInnerFormData,
  TypeLoginForm,
} from "../../../../../features/forms/newItemForm/types/types";
import { TypeDefaultValues } from "./config/defaultData";
import { IoCardOutline, IoDocumentLockOutline } from "react-icons/io5";
import { LuGlobe2 } from "react-icons/lu";

export const itemMap = new Map<
  string,
  (item: TypeInnerFormData, defaultValues: TypeDefaultValues) => any
>([
  [
    "Login",
    (item: TypeLoginForm, defaultValues: TypeDefaultValues) => ({
      ...defaultValues,
      icon: <LuGlobe2 />,
      description: item.userName,
    }),
  ],
  [
    "Card",
    (item: TypeCardForm, defaultValues: TypeDefaultValues) => ({
      ...defaultValues,
      icon: <IoCardOutline />,
      description: item.number,
    }),
  ],
  [
    "Secure note",
    (_, defaultValues: TypeDefaultValues) => ({
      ...defaultValues,
      icon: <IoDocumentLockOutline />,
      description: null,
    }),
  ],
]);
