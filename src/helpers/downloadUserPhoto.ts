import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../services/firebase-config";
import { showError } from "./notify";

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
