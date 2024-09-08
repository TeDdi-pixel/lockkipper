import { deleteField, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../lib/firebase/config";
import { notify } from "../../../../../helpers/toastify/notify";

export const deleteFolderItem = async (
  uid: string,
  itemId: number,
  folder: string
) => {
  try {
    const docRef = doc(db, `vaults/${uid}/folders/${folder || "No folder"}`);

    await updateDoc(docRef, {
      [itemId]: deleteField(),
    });
    notify("Item has been successfully deleted!");
  } catch (error) {
    console.log(error);
  }
};
