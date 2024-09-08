import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../../lib/firebase/config";
import { showError } from "../../../../../helpers/toastify/error";

export const getItem = async (itemId: string, uid: string) => {
  try {
    const itemRef = collection(db, `vaults/${uid}/folders`);
    const folders = await getDocs(itemRef);

    for (const folderItem of folders.docs) {
      const currentFolderItem = folderItem.data();
      if (currentFolderItem[itemId]) return currentFolderItem[itemId];
    }
  } catch (error) {
    console.log(error);
    showError(`${error}`);
  }
};
