import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../lib/firebase/config";
import { showError } from "./toastify/error";

export const downloadUserPhoto = async (uid: string) => {
  try {
    const url = await getDownloadURL(
      ref(storage, `users/${uid}/userPhoto/photo.webp`)
    );

    return url;
  } catch (error) {
    console.log(error);
    showError(`${error}`);
  }
};
