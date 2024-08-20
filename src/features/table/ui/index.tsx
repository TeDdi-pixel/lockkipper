import { useState } from "react";
import { cellsData } from "../../../widgets/contentTable/config/config";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

export const Table = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleCheckAll = () => {
    checkedItems.length === cellsData.length
      ? setCheckedItems([])
      : setCheckedItems(cellsData.map((item) => item.id));
  };

  const handleSelectCheckbox = (itemId: number) => {
    setCheckedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <div className="w-full pl-6">
      <table className="border-collapse w-full">
        <TableHead
          handleCheckAll={handleCheckAll}
          allChecked={checkedItems.length === cellsData.length}
        />
        <TableBody
          data={cellsData}
          checkedItems={checkedItems}
          handleSelectCheckbox={handleSelectCheckbox}
        />
      </table>
    </div>
  );
};
