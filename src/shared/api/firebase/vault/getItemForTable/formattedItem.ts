import {
  TypeCardForm,
  TypeInnerFormData,
  TypeLoginForm,
} from "../../../../../features/forms/newItemForm/types/types";
import { defaultValues } from "./config/defaultData";
import { itemMap } from "./itemMap";

type TypeFormUnion = TypeLoginForm | TypeCardForm | TypeInnerFormData;

export const formattedItem = (item: TypeFormUnion, id: string) => {
  const formatter = itemMap.get(item.formType);
  const name = item.itemName;
  const folder = item.folder;

  if (formatter) {
    return formatter(item, defaultValues({ id, name, owner: "Me", folder }));
  } else return null;
};
