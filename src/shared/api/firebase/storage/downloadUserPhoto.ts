import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../../../lib/firebase/config";
import { showError } from "../../../../helpers/toastify/error";

export const downloadUserPhoto = async (uid: string) => {
  try {
    const url = await getDownloadURL(
      ref(storage, `users/${uid}/userPhoto/photo.webp`)
    );
    if (!url) throw new Error("Error while downloading photo");

    return url;
  } catch (error) {
    console.log(error);
    showError(`${error}`);
  }
};
