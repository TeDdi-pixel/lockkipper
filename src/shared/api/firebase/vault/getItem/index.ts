import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../../lib/firebase/config";
import { showError } from "../../../../../helpers/toastify/error";

export const getItem = async (itemId: string, uid: string) => {
  try {
    const itemRef = collection(db, `vaults/${uid}/folders`);
    const folders = await getDocs(itemRef);

    const foundItem = folders.docs.find((item) => item.data()[itemId]);
    console.log(foundItem);
    
    return foundItem ? foundItem.data()[itemId] : undefined;
    
  } catch (error) {
    console.log(error);
    showError(`${error}`);
  }
};
