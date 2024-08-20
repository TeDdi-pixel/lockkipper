import { Checkbox } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TypeCellsData } from "../../../widgets/contentTable/config/config";

type TypeProps = {
  data: TypeCellsData[];
  checkedItems: number[];
  handleSelectCheckbox: (itemId: number) => void;
};

const TableBody = ({ data, checkedItems, handleSelectCheckbox }: TypeProps) => {
  return (
    <tbody className="table-body">
      {data.map((cell) => (
        <tr key={cell.id} className="table-body__row">
          <td className="table-body__row-cell">
            <Checkbox
              size="small"
              checked={checkedItems.includes(cell.id)}
              onChange={() => handleSelectCheckbox(cell.id)}
            />
            <span className="table-body__row-cell-icon">{cell.icon}</span>
          </td>
          <td className="table-body__row-cell">
            <div className="cell__name">
              <span className="cell__name-main">{cell.name}</span>
              <span className="cell__name-additional">{cell.description}</span>
            </div>
          </td>
          <td className="table-body__row-cell">
            <span className="cell__owner">{cell.owner}</span>
          </td>
          <td className="table-body__row-cell ">
            <div className="cell__options">
              <BsThreeDotsVertical />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
