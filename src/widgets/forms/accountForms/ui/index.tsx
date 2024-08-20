import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { useForm } from "react-hook-form";
import { RootState, TypeMyAccountForm } from "../../../../store/types/types";
import { updateUserProfile } from "../../../../store/asyncThunks/updateUserProfile";
import ProfilePhotoBlock from "./ProfilePhotoBlock";
import FormInputs from "./FormInputs";
import SaveButton from "./SaveButton";
import useImageHandler from "../../../../hooks/useImageHandler";

export const AccountForm = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const { handleImage } = useImageHandler();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const { register, handleSubmit, setValue } = useForm<TypeMyAccountForm>({
    defaultValues: {
      newDisplayName: user?.displayName ?? "",
      newEmail: user?.email ?? "",
    },
  });

  const onSubmit = (data: TypeMyAccountForm) =>
    dispatch(updateUserProfile(data));

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-[31px] items-center mb-[15.5px]">
        <FormInputs register={register} setValue={setValue} />
        <ProfilePhotoBlock handleImage={handleImage} />
      </div>
      <SaveButton />
    </form>
  );
};
