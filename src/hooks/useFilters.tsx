import { MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/types/types";
import { setCellsData, setFilter } from "../store/features/vault/vaultSlice";
import { getItemsForTable } from "../shared/api/firebase/vault/getItemForTable";
import { filterCellsByFolder } from "../shared/api/firebase/vault/filterCellsByFolder";
import { showError } from "../helpers/toastify/error";
import { filterCellsByType } from "../shared/api/firebase/vault/filterСellsByType";

const useFilters = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);

  const handleClick = async (e: MouseEvent<HTMLElement>) => {
    if (!user) return showError("User is not defined");

    const target = e.target as HTMLButtonElement;
    const itemName = target.innerText;

    dispatch(setFilter(itemName));

    if (itemName === "All folders") {
      getItemsForTable(user.uid, (allItems) => {
        dispatch(setCellsData(allItems));
      });
      return;
    }

    const filteredCellsByType = await filterCellsByType(user.uid, itemName);
    if (filteredCellsByType) {
      dispatch(setCellsData(filteredCellsByType));
      return;
    }

    const filteredCellsByFolder = await filterCellsByFolder(user.uid, itemName);
    if (filteredCellsByFolder) dispatch(setCellsData(filteredCellsByFolder));
  };
  return { handleClick };
};

export default useFilters;
