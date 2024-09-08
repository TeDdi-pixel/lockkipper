import { TypeForm } from "../../features/forms/newItemForm/types/types";
import { TypeRegistration } from "../../features/forms/types/types";
import store from "../store";

export type AppDispatch = typeof store.dispatch;

export type RootState = {
  loginForm: TypeLoginForm;
  registerForm: TypeRegisterForm;
  user: TypeUserSlice;
  auth: TypeAuthSlice;
  vault: any;
};

export type TypeCurrentForm =
  | "emailForm"
  | "passwordForm"
  | "createAccountForm";

export type TypeAuthSlice = {
  currentForm: TypeCurrentForm;
  formData: TypeRegistration | null;
  passwordSafeness: number;
  email: string | null;
  password: string | null;
  emailIsRemembered: string | boolean;
};

export type TypeLoginForm = {
  email: string | null;
  emailEntered: boolean;
  password: string | null;
  emailIsRemembered: string | boolean;
};

export type TypeRegisterForm = {
  formData: TypeRegistration | null;
  passwordSafeness: number;
};

export type TypeUser = {
  uid: string;
  photoURL: string | null;
  email: string | null;
  hint?: string | null;
  displayName: string | null;
  password?: string | null;
};

export type TypeUserSlice = {
  user: TypeUser | null;
  profilePhoto?: string | null;
  userLoggedIn: boolean;
};

export type TypeMyAccountForm = {
  newEmail?: string;
  newDisplayName?: string;
};

export type TypeNewForm = "newItemForm" | "newFolderForm";

export type TypeVault = {
  formIsOpen: boolean;
  currentForm: TypeNewForm | null;
  formType: TypeForm;
};
