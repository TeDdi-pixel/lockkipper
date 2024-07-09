import { useState } from "react";
import TableBody from "../../entities/table/TableBody";
import TableHead from "../../entities/table/TableHead";
import { cellsData } from "../../widgets/contentTable/config/config";

const Table = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleCheckAll = () => {
    if (checkedItems.length === cellsData.length) {
      setCheckedItems([]); // Uncheck all
    } else {
      setCheckedItems(cellsData.map(item => item.id)); // Check all
    }
  };

  const handleSelectCheckbox = (itemId: number) => {
    setCheckedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId) // Uncheck if already checked
        : [...prev, itemId] // Check if not checked
    );
  };

  return (
    <div className="table__wrapper">
      <table className="table">
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

export default Table;
