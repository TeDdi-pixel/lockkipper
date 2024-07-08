import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../services/firebase-config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Cookies from "js-cookie";
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
      const docSnap = await getDoc(docRef);

      let updatedUser = {
        uid: user.uid,
        email: data.email,
        hint: data.hint,
        displayName: data.displayName,
        password: data.password,
        photoURL: user.photoURL,
      };

      if (!docSnap.exists()) {
        await setDoc(docRef, updatedUser);
      } else {
        updatedUser = docSnap.data() as TypeRegistration;
      }

      Cookies.set("user", JSON.stringify(updatedUser), { expires: 7 });
      return updatedUser;
    } catch (error) {
      console.error(error);
      showError(`${error}`);
      return null;
    }
  }
);
