import { ref, uploadString } from "firebase/storage";
import { storage } from "../services/firebase-config";
import { showError } from "./notify";

export const uploadProfilePhoto = async (uid: string, webpUserPhoto: string) => {
  const storageRef = ref(storage, `users/${uid}/userPhoto/photo.webp`);

  try {
    await uploadString(storageRef, webpUserPhoto, "data_url");
  } catch (error) {
    console.error("Error uploading profile photo:", error);
    showError(`${error}`);
    throw error;
  }
};
