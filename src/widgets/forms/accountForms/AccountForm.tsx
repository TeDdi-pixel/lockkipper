import { Button, TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, TypeMyAccountForm } from "../../../store/types/types";
import { uploadProfilePhoto } from "../../../helpers/uploadUserPhoto";
import useCompression from "../../../hooks/useCompression";
import { Save } from "@mui/icons-material";
import ProfilePhotoBlock from "../../../entities/forms/accountForm/ProfilePhotoBlock";
import { updateUserPhoto } from "../../../store/asyncThunks/updateUserPhoto";
import { ThunkDispatch } from "redux-thunk";
import { useForm } from "react-hook-form";
import { updateUserProfile } from "../../../store/asyncThunks/updateUserProfile";

const AccountForm = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const { compressAndConvertToWebp } = useCompression();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const { register, handleSubmit, setValue } = useForm<TypeMyAccountForm>({
    defaultValues: {
      newDisplayName: user?.displayName ?? "",
      newEmail: user?.email ?? "",
    },
  });

  const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const webpBase64File = await compressAndConvertToWebp(file);

      if (!user || !webpBase64File) return;

      await uploadProfilePhoto(user.uid, webpBase64File);
      await dispatch(updateUserPhoto(webpBase64File));
    }
  };

  const onSubmit = (data: TypeMyAccountForm) =>
    dispatch(updateUserProfile(data));

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-[31px] items-center mb-[15.5px]">
        <div className="flex flex-col w-[380px] gap-[31px]">
          <TextField
            label="User name"
            size="small"
            type="text"
            fullWidth
            {...register("newDisplayName")}
            inputProps={{ maxLength: 32 }}
            onChange={(e) => setValue("newDisplayName", e.target.value)}
          />
          <TextField
            type="email"
            label="Email"
            size="small"
            fullWidth
            inputProps={{ maxLength: 45 }}
            {...register("newEmail")}
            onChange={(e) => setValue("newEmail", e.target.value)}
          />
        </div>

        <ProfilePhotoBlock handleImage={handleImage} />
      </div>

      <Button
        sx={{ maxWidth: "80px" }}
        variant="contained"
        endIcon={<Save />}
        type="submit"
      >
        Save
      </Button>
    </form>
  );
};

export default AccountForm;
