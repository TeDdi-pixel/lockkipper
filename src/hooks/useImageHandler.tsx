import { useDispatch, useSelector } from "react-redux";
import useCompression from "./useCompression";
import { ThunkDispatch } from "redux-thunk";
import { ChangeEvent } from "react";
import { uploadProfilePhoto } from "../helpers/uploadUserPhoto";
import { updateUserPhoto } from "../store/asyncThunks/updateUserPhoto";
import { showError } from "../helpers/toastify/error";
import { RootState } from "../store/types/types";

const useImageHandler = () => {
  const { compressAndConvertToWebp } = useCompression();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { user } = useSelector((state: RootState) => state.user);

  const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      if (!e.target.files) throw new Error("No photo file was found");

      const file = e.target.files[0];
      const webpBase64File = await compressAndConvertToWebp(file);

      if (!user || !webpBase64File)
        throw new Error("No user or webpBase64File was found");

      await uploadProfilePhoto(user.uid, webpBase64File);
      await dispatch(updateUserPhoto(webpBase64File));
    } catch (error) {
      console.log(error);
      showError(`${error}`);
    }
  };

  return { handleImage };
};

export default useImageHandler;
