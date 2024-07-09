import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../services/firebase-config";
import { doc, setDoc } from "firebase/firestore";
import { showError } from "../../helpers/notify";
import { TypeRegistration } from "../../widgets/forms/startPageForms/types/types";

export const createAccount = createAsyncThunk(
  "user/createAccount",
  async (data: TypeRegistration) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      if (!userCredential) return;

      const user = userCredential.user;

      const docRef = doc(db, "users", user.uid);

      let newFirebaseUser = {
        uid: user.uid,
        email: data.email,
        hint: data.hint,
        displayName: data.displayName,
        password: data.password,
        photoURL: user.photoURL,
      };

      await setDoc(docRef, newFirebaseUser);

      return newFirebaseUser;
    } catch (error) {
      console.error(error);
      showError(`${error}`);
      return null;
    }
  }
);
