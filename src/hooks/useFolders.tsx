import { ReactNode, useCallback, useEffect, useState } from "react";
import { showError } from "../helpers/toastify/error";
import { collection, getDocs } from "firebase/firestore";
import { useSelector } from "react-redux";
import { RootState } from "../store/types/types";
import { db } from "../lib/firebase/config";
import { MdFolderOpen } from "react-icons/md";

export type TypeFolder = {
  id: string | number;
  name: string;
  icon?: ReactNode;
};

const useFolders = (folderType: "filterFolder" | "selectFolder") => {
  const { user } = useSelector((state: RootState) => state.user);
  const [folders, setFolders] = useState<TypeFolder[]>([]);

  const uid = user?.uid;

  const folderMap = new Map([
    ["selectFolder", (id: string) => ({ id: id, name: id })],
    [
      "filterFolder",
      (id: string) => ({ id: id, name: id, icon: <MdFolderOpen /> }),
    ],
  ]);

  const getFolders = useCallback(async () => {
    try {
      const foldersCollectionRef = collection(db, `vaults/${uid}/folders`);
      const querySnapshot = await getDocs(foldersCollectionRef);

      querySnapshot.docs.map((doc) => {
        const mapFolder = folderMap.get(folderType);
        if (mapFolder) setFolders((prev) => [...prev, mapFolder(doc.id)]);
      });
    } catch (error) {
      console.error("Error fetching folders: ", error);
      showError("Error fetching folders: " + error);
    }
  }, [uid]);

  useEffect(() => {
    if (uid) getFolders();
  }, [uid, getFolders]);

  return { folders };
};

export default useFolders;
