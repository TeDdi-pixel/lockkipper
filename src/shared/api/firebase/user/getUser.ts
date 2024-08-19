import { doc, getDoc } from "firebase/firestore";
import { TypeUser } from "../../../../store/types/types";
import { db } from "../../../../services/firebase-config";

export const getUser = async (user: TypeUser) => {
  const docRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) throw new Error("User does not exist");

  const userData: TypeUser = {
    uid: docSnap.id,
    email: docSnap.data().email,
    photoURL: docSnap.data().photoURL,
    displayName: docSnap.data().displayName,
  };

  return userData;
};
