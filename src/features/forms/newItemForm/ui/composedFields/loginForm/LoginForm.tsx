import { CustomTextField } from "../../../../../../shared/ui/CustomTextField";
import SafeTextField from "../../../../../../shared/ui/SafeTextField";
import { FolderOptions } from "../../fields/FolderOptions";
import { TypeRegisterControl } from "../../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../store/types/types";
import { SkeletonLoginForm } from "./SkeletonLoginForm";

export const LoginForm = ({ register, control }: TypeRegisterControl) => {
  const { vaultItem, itemLoading } = useSelector(
    (state: RootState) => state.vault
  );

  return itemLoading ? (
    <SkeletonLoginForm />
  ) : (
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
          name="userName"
          label="Username"
          register={register}
          defaultValue={vaultItem.userName}
        />
        <SafeTextField
          register={register}
          label="Password"
          name="password"
          defaultValue={vaultItem.password}
        />
      </div>
      <div className="flex gap-5 max-w-[377px]">
        <CustomTextField
          name="url"
          label="URL"
          register={register}
          defaultValue={vaultItem.url}
        />
      </div>
    </div>
  );
};
