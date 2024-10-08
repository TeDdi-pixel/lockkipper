import { collection, onSnapshot } from "firebase/firestore";
import { TypeCellsData } from "../../../../../widgets/contentTable/config/config";
import { db } from "../../../../../lib/firebase/config";
import { formattedItem } from "./formattedItem";

export const getItemsForTable = (
  uid: string,
  callback: (items: TypeCellsData[]) => void
) => {
  onSnapshot(collection(db, `vaults/${uid}/folders`), (snapshot) => {
    const allItems: TypeCellsData[] = [];

    snapshot.docs.forEach((folder) => {
      const folderData = folder.data();

      Object.keys(folderData).forEach((key) => {
        const item = folderData[key];
        const newItem = formattedItem(item, key);
        if (newItem) allItems.push(newItem);
      });
    });

    const allItemsToSorted: TypeCellsData[] = [...allItems].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    callback(allItemsToSorted);
  });
};
