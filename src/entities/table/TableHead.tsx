import { Checkbox } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";

const TableHead = () => {
  return (
    <thead className="table-head">
      <tr className="table-head__row">
        <th className="table-head__row-cell">
          <Checkbox size="small" />
          <span>All</span>
        </th>
        <th className="table-head__row-cell">Name</th>
        <th className="table-head__row-cell">Owner</th>
        <th className="table-head__row-cell">
          <div className="cell__options">
            <BsThreeDotsVertical />
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
