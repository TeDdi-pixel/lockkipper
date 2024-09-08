import { useSelector } from "react-redux";
import { DefaultRegister } from "../../../../../entities/emailForm/types/types";
import { CustomTextField } from "../../../../../shared/ui/CustomTextField";
import { RootState } from "../../../../../store/types/types";

export const NotesField = ({ register }: DefaultRegister) => {
  const { vaultItem } = useSelector((state: RootState) => state.vault);

  return (
    <CustomTextField
      name="notes"
      label="Notes"
      multiline
      rows={6}
      register={register}
      defaultValue={vaultItem.notes}
    />
  );
};

