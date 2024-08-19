import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithPopup } from "firebase/auth";
import { auth, db, googleProvider } from "../../lib/firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { TypeUser } from "../types/types";
import { setUser } from "../features/user/userSlice";
import { showError } from "../../helpers/toastify/error";

export const signInWithGoogle = createAsyncThunk<TypeUser | undefined, void>(
  "user/signInWithGoogle",
  async (_, { dispatch }) => {
    try {
      //Getting user from Firestore Authentication database
      const { user: fullUser } = await signInWithPopup(auth, googleProvider);

      const user: TypeUser = {
        uid: fullUser.uid,
        email: fullUser.email,
        displayName: fullUser.displayName,
        photoURL: fullUser.photoURL,
      };

      //Getting user from users collection
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, user);
        dispatch(setUser(user));
        return user;
      }

      const firebaseUser = docSnap.data() as TypeUser;
      dispatch(setUser(firebaseUser));
      return firebaseUser;
    } catch (error) {
      console.log("Error signing in with Google: ", error);
      showError(`Error signing in with Google: ${error}`);
      return undefined;
    }
  }
);
