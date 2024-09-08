import { DefaultRegister } from "../../../../../entities/emailForm/types/types";
import { CustomTextField } from "../../../../../shared/ui/CustomTextField";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/types/types";

export const ExpirationYear = ({ register }: DefaultRegister) => {
  const { vaultItem } = useSelector((state: RootState) => state.vault);
  return (
    <CustomTextField
      label="Expiration year"
      placeholder="ex. 2019"
      defaultValue={vaultItem.expirationYear}
      name="expirationYear"
      register={register}
    />
  );
};
