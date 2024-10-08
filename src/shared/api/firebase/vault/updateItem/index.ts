import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../lib/firebase/config";
import { notify } from "../../../../../helpers/toastify/notify";
import { showError } from "../../../../../helpers/toastify/error";
import { TypeInnerFormData } from "../../../../../features/forms/newItemForm/types/types";

export const updateItem = async (
  uid: string,
  folder: string,
  item: TypeInnerFormData,
  itemId: string
) => {
  const formType = item.formType || "Login";
  const newItem = { ...item, formType: formType };

  try {
    const docRef = doc(db, `vaults/${uid}/folders/${folder ?? "No folder"}`);
    await updateDoc(docRef, {
      [itemId]: newItem,
    });
    notify(`Item has been successfully updated!`);
  } catch (error) {
    showError(`Failed to log out: ${error}`);
    console.log(error);
  }
};
