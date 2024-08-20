import { updateProfile } from "firebase/auth";
import { auth } from "../../../../lib/firebase/config";
import { DocumentReference, updateDoc } from "firebase/firestore";
import { showError } from "../../../../helpers/toastify/error";

export const updateUserName = async (
  docRef: DocumentReference,
  newDisplayName: string
) => {
  const newName = { displayName: newDisplayName };

  try {
    if (!auth.currentUser)
      throw new Error("No user is currently signed in. Re-enter your account");

    await updateProfile(auth.currentUser, newName);
    await updateDoc(docRef, newName);
  } catch (error) {
    showError(`${error}`);
  }
};
