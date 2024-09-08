import { Control } from "react-hook-form";
import SelectOption from "../../../../../shared/ui/SelectOption";
import useFolders from "../../../../../hooks/useFolders";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/types/types";

export const FolderOptions = ({ control }: { control: Control }) => {
  const { folders } = useFolders("selectFolder");
  const { vaultItem } = useSelector(
    (state: RootState) => state.vault
  );

  return (
    <SelectOption
      defaultValue={vaultItem?.folder}
      control={control}
      label="Folder"
      name="folder"
      options={folders}
    />
  );
};
