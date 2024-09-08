import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../lib/firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { TypeRegistration } from "../../features/forms/types/types";
import { showError } from "../../helpers/toastify/error";
import { createDefaultVault } from "../../shared/api/firebase/vault/createDefaultVault/createDefaultVault";

export const createAccount = createAsyncThunk(
  "user/createAccount",
  async (data: TypeRegistration) => {
    const { email, password, displayName, hint } = data;

    if (!email || !password) {
      throw new Error("Email and password are required.");
    }

    try {
      const { user: fullUser } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = {
        uid: fullUser.uid,
        email: email,
        hint: hint,
        displayName: displayName,
        photoURL: fullUser.photoURL,
      };

      const docRef = doc(db, "users", user.uid);
      await setDoc(docRef, user);
      await createDefaultVault(user.uid);

      return user;
    } catch (error) {
      console.log("Error with creating user: ", error);
      showError(`Error creating a user: ${error}`);
      return undefined;
    }
  }
);
