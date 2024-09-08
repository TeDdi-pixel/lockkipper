import SelectOption from "../../../../../shared/ui/SelectOption";
import { brandOptions } from "../../config/brandOptions";
import { monthOptions } from "../../config/monthOptions";
import SaveTextField from "../../../../../shared/ui/SafeTextField";
import { CustomTextField } from "../../../../../shared/ui/CustomTextField";
import { TypeRegisterControl } from "../../types/types";
import { FolderOptions } from "../fields/FolderOptions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/types/types";

export const CardForm = ({ register, control }: TypeRegisterControl) => {
  const { vaultItem } = useSelector((state: RootState) => state.vault);

  return (
    <div className="flex flex-col gap-y-5 px-4">
      <div className="flex gap-5">
        <CustomTextField
          name="itemName"
          label="Name"
          required
          register={register}
          defaultValue={vaultItem.itemName}
        />
        <FolderOptions control={control} />
      </div>
      <div className="flex gap-5">
        <CustomTextField
          label="Cardholder name"
          name="cardHolderName"
          register={register}
          defaultValue={vaultItem.cardHolderName}
        />
        <SelectOption
          control={control}
          name="brand"
          label="Brand"
          options={brandOptions}
          defaultValue={vaultItem.brand}
        />
      </div>
      <div className="flex gap-5">
        <div className="max-w-[377px] w-full">
          <SaveTextField
            register={register}
            label="Number"
            name="number"
            defaultValue={vaultItem.number}
          />
        </div>

        <div className="flex gap-5 flex-1">
          <SelectOption
            control={control}
            name="expirationMonth"
            label="Expiration month"
            options={monthOptions}
            defaultValue={vaultItem.expirationMonth}
          />
          <CustomTextField
            label="Expiration year"
            placeholder="ex. 2019"
            name="expirationYear"
            register={register}
            defaultValue={vaultItem.expirationYear}
          />
        </div>
      </div>
      <div className="max-w-[377px]">
        <SaveTextField
          defaultValue={vaultItem.cvv}
          register={register}
          label="Security code (CVV)"
          name="cvv"
        />
      </div>
    </div>
  );
};
