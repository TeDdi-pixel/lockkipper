import { useEffect, useState } from "react";
import { TypeCellsData } from "../../../widgets/contentTable/config/config";
import NewItemButton from "../../../shared/ui/NewItemButton";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/types/types";
import useCheckbox from "../../../hooks/useCheckbox";
import { CiFileOff } from "react-icons/ci";
import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";
import { getItemsForTable } from "../../../shared/api/firebase/vault/getItemForTable";

export const Table = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<TypeCellsData[]>([]);
  const { user } = useSelector((state: RootState) => state.user);
  const { handleCheckAll, handleCheckbox, checkedItems } = useCheckbox(items);

  useEffect(() => {
    if (user?.uid) {
      setLoading(true);
      getItemsForTable(user.uid, (allItems) => {
        setItems(allItems);
        setLoading(false);
      });
    }
  }, [user?.uid]);

  return (
    <div className="w-full pl-6">
      <table className="border-collapse w-full">
        <TableHead
          handleCheckAll={handleCheckAll}
          allChecked={
            items.length !== 0 && checkedItems.length === items.length
          }
        />
        <TableBody
          loading={loading}
          data={items}
          checkedItems={checkedItems}
          handleCheckbox={handleCheckbox}
        />
      </table>
      {!loading && items.length === 0 ? (
        <>
          <div className="text-primary-foreground flex items-center justify-center w-full flex-col mt-[15px] mb-[20px]">
            <CiFileOff fontSize={80} className="opacity-30" />
            <div>There are no items to list.</div>
          </div>
          <div className="flex w-full justify-center">
            <NewItemButton text="New item" />
          </div>
        </>
      ) : null}
    </div>
  );
};
