import { collection, getDocs } from "firebase/firestore";
import { formattedItem } from "./getItemForTable/formattedItem";
import { db } from "../../../../lib/firebase/config";
import { TypeCellsData } from "../../../../widgets/contentTable/config/config";

export const filterCellsByType = async (uid: string, type: string) => {
  const cellsTypes = ["Login", "Card", "Secure note"];
  for (const cellType of cellsTypes) {
    if (cellType === type) {
      const collectionRef = collection(db, `vaults/${uid}/folders/`);
      const querySnapshot = await getDocs(collectionRef);
      const itemFilteredByType = [] as TypeCellsData[];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const keys = Object.keys(data);
        if (keys.length !== 0) {
          for (const key of keys) {
            const item = data[key];

            if (item && item.formType === type) {
              const newItem = formattedItem(item, key);
              if (newItem) itemFilteredByType.push(newItem);
            }
          }
        }
      });

      return itemFilteredByType;
    }
  }
};
