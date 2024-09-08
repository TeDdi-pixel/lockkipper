import { CustomTextField } from "../../../../../shared/ui/CustomTextField";
import { FolderOptions } from "../fields/FolderOptions";
import { TypeRegisterControl } from "../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/types/types";

export const SecureNoteForm = ({ register, control }: TypeRegisterControl) => {
  const { vaultItem } = useSelector((state: RootState) => state.vault);

  return (
    <div className="flex gap-5 px-4">
      <CustomTextField
        name="itemName"
        label="Name"
        required
        register={register}
        defaultValue={vaultItem.itemName}
      />
      <FolderOptions control={control} />
    </div>
  );
};
