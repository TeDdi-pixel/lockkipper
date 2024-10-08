import { Checkbox } from "@mui/material";
import { TypeCellsData } from "../../../widgets/contentTable/config/config";
import { SkeletonItems } from "./SkeletonItems";
import ThreeDots from "./ThreeDots";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/types/types";
import { setVaultItem } from "../../../store/asyncThunks/setVaultItem";
import { MouseEvent } from "react";
import {
  openForm,
  setVaultItemId,
} from "../../../store/features/vault/vaultSlice";

type TypeProps = {
  checkedItems: number[];
  handleCheckbox: (itemId: number) => void;
  loading: boolean;
};

export const TableBody = ({
  loading,
  checkedItems,
  handleCheckbox,
}: TypeProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { cellsData } = useSelector((state: RootState) => state.vault);

  const handleClick = (e: MouseEvent<HTMLTableCellElement>) => {
    const itemId = e.currentTarget.id;
    dispatch(setVaultItemId(itemId));
    dispatch(setVaultItem(itemId));
    dispatch(openForm("newItemForm"));
  };

  return (
    <tbody>
      {loading ? (
        <SkeletonItems />
      ) : (
        cellsData.map((cell: TypeCellsData) => (
          <tr key={cell.id} className="h-[40px] border-t border-border">
            <td className="h-[65px] p-[10.5px] pr-0 flex items-center justify-between">
              <Checkbox
                size="small"
                checked={checkedItems.includes(cell.id)}
                onChange={() => handleCheckbox(cell.id)}
              />
              <span className="size-[23px] text-primary-foreground text-[23px] w-[35px] ml-5 flex justify-center">
                {cell.icon}
              </span>
            </td>
            <td
              className="p-[10.5px]"
              onClick={handleClick}
              id={`${cell.id}`}
            >
              <div className="flex flex-col justify-between gap-[5px]">
                <span className="text-primary font-bold hover:underline cursor-pointer">
                  {cell.name}
                </span>
                <span className="text-primary-foreground font-medium">
                  {cell.description}
                </span>
              </div>
            </td>
            <td className="p-[10.5px]">
              <span className="bg-accent-foreground py-[1.75px] px-[5.25px] rounded text-primary-foreground text-[10.5px] font-bold">
                {cell.owner}
              </span>
            </td>
            <td className="p-[10.5px]">
              <ThreeDots itemId={cell.id} folder={cell.folder} />
            </td>
          </tr>
        ))
      )}
    </tbody>
  );
};
