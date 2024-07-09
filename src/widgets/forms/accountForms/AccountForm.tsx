import { Button, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/types/types";
import { uploadProfilePhoto } from "../../../helpers/uploadUserPhoto";
import useCompression from "../../../hooks/useCompression";
import { Save } from "@mui/icons-material";
import ProfilePhotoBlock from "../../../entities/forms/accountForm/ProfilePhotoBlock";
import { updateUserPhoto } from "../../../store/asyncThunks/updateUserPhoto";
import { ThunkDispatch } from "redux-thunk";

const AccountForm = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const [userName, setUserName] = useState(user?.displayName);
  const [userEmail, setUserEmail] = useState(user?.email);
  const { compressAndConvertToWebp } = useCompression();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const handleUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const webpBase64File = await compressAndConvertToWebp(file);

      if (!user || !webpBase64File) return;

      await uploadProfilePhoto(user.uid, webpBase64File);
      await dispatch(updateUserPhoto(webpBase64File));
    }
  };

  const handleUserEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
  };
  return (
    <form className="flex flex-col">
      <div className="flex gap-[31px] items-center mb-[15.5px]">
        <div className="flex flex-col w-[380px] gap-[31px]">
          <TextField
            label="User name"
            value={userName}
            onChange={handleUserName}
            size="small"
            type="text"
            fullWidth
          />
          <TextField
            type="email"
            label="Email"
            value={userEmail}
            onChange={handleUserEmail}
            size="small"
            fullWidth
          />
        </div>

        <ProfilePhotoBlock handleImage={handleImage} />
      </div>

      <Button sx={{ maxWidth: "80px" }} variant="contained" endIcon={<Save />}>
        Save
      </Button>
    </form>
  );
};

export default AccountForm;
