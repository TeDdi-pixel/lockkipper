import { Checkbox } from "@mui/material";
import ThreeDots from "./ThreeDots";

type TypeProps = {
  handleCheckAll: () => void;
  allChecked: boolean;
};
const headCellStyles = "p-[10px] text-text font-semibold text-left";

export const TableHead = ({ handleCheckAll, allChecked }: TypeProps) => {
  return (
    <thead>
      <tr className="border-b-2 border-border">
        <th className={`${headCellStyles} first:max-w-[84px] first:w-[84px]`}>
          <Checkbox
            size="small"
            onChange={handleCheckAll}
            checked={allChecked}
          />
          <span className="align-middle">All</span>
        </th>
        <th className={`${headCellStyles}`}>Name</th>
        <th className={`${headCellStyles}`}>Owner</th>
        <th className={`${headCellStyles}`}>
          <ThreeDots />
        </th>
      </tr>
    </thead>
  );
};

