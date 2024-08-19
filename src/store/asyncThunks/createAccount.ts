import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../services/firebase-config";
import { doc, setDoc } from "firebase/firestore";
import { showError } from "../../helpers/notify";
import { TypeRegistration } from "../../widgets/forms/startPageForms/types/types";

export const createAccount = createAsyncThunk(
  "user/createAccount",
  async (data: TypeRegistration) => {
    const { email, password } = data;
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      if (!email || !password) {
        throw new Error("Email and password are required.");
      }

      const fullUser = userCredential.user;

      const user = {
        uid: fullUser.uid,
        email: data.email,
        hint: data.hint,
        displayName: data.displayName,
        photoURL: fullUser.photoURL,
      };
      const docRef = doc(db, "users", fullUser.uid);
      await setDoc(docRef, user);

      return user;
    } catch (error) {
      console.log("Error with creating user: ", error);
      showError(`${error}`);
      return undefined;
    }
  }
);
