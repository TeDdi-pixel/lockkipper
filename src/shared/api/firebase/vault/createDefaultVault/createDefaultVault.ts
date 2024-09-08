import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../../../lib/firebase/config";

export const createDefaultVault = async (uid: string) => {
  const vaultsRef = doc(db, `vaults/${uid}/folders`, "No folder");
  await setDoc(vaultsRef, {});
};
