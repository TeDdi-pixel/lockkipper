import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../../lib/firebase/config";
import { TypeCellsData } from "../../../../../widgets/contentTable/config/config";
import { formattedItem } from "../getItemForTable/formattedItem";
import { showError } from "../../../../../helpers/toastify/error";

export const filterCellsByFolder = async (uid: string, folder: string) => {
  try {
    const collectionRef = collection(db, `vaults/${uid}/folders`);
    const querySnapshot = await getDocs(collectionRef);

    if (querySnapshot.empty) throw new Error("No matching documents.");
    const filteredCells = [] as TypeCellsData[];
    let folderData = null as any;
    querySnapshot.forEach((doc) => {
      if (doc.id === folder) folderData = doc.data();
    });

    if (!folderData) return;
    Object.keys(folderData).forEach((key) => {
      const item = folderData[key];
      const newItem = formattedItem(item, key);
      if (newItem) filteredCells.push(newItem);
    });
    return filteredCells;
  } catch (error) {
    showError(`Error fetching documents: ${error}`);
  }
};
