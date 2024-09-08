import { useState } from "react";
import { TypeCellsData } from "../widgets/contentTable/config/config";

const useCheckbox = (items: TypeCellsData[]) => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleCheckAll = () => {
    checkedItems.length === items.length
      ? setCheckedItems([])
      : setCheckedItems(items.map((item) => item.id));
  };

  const handleCheckbox = (itemId: number) => {
    setCheckedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  return { handleCheckAll, handleCheckbox, checkedItems };
};

export default useCheckbox;
