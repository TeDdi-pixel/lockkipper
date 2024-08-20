import { updateEmail } from "firebase/auth";
import { auth } from "../../../../lib/firebase/config";
import { DocumentReference, updateDoc } from "firebase/firestore";
import { showError } from "../../../../helpers/toastify/error";

export const updateUserEmail = async (
  docRef: DocumentReference,
  newUserEmail: string
) => {
  const newEmail = { email: newUserEmail };

  try {
    if (!auth.currentUser)
      throw new Error("No user is currently signed in. Re-enter your account");
    
    await updateEmail(auth.currentUser, newEmail.email);
    await updateDoc(docRef, newEmail);
  } catch (error) {
    showError(`${error}`);
  }
};
