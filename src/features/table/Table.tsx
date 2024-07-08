import TableBody from "../../entities/table/TableBody";
import TableHead from "../../entities/table/TableHead";
import { cellsData } from "../../widgets/contentTable/config/config";

const Table = () => {
  return (
    <div className="table__wrapper">
      <table className="table">
        <TableHead />
        <TableBody data={cellsData} />
      </table>
    </div>
  );
};

export default Table;
