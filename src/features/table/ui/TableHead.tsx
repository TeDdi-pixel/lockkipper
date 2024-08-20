import { Checkbox } from "@mui/material";
import ThreeDots from "./ThreeDots";

type TypeProps = {
  handleCheckAll: () => void;
  allChecked: boolean;
};
const headCellStyles = "p-[10px] text-text font-semibold";

const TableHead = ({ handleCheckAll, allChecked }: TypeProps) => {
  return (
    <thead>
      <tr className="border-b-2 border-border">
        <th className={`${headCellStyles} first: min-w-[84px] w-[132px]`}>
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

export default TableHead;
