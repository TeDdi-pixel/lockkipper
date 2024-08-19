import { TypeRegistration } from "../../widgets/forms/startPageForms/types/types";

export type RootState = {
  loginForm: TypeLoginForm;
  registerForm: TypeRegisterForm;
  user: TypeUserSlice;
};

export type TypeLoginForm = {
  email: string | null;
  emailEntered: boolean;
  password: string | null;
  emailIsRemembered: boolean;
};

export type TypeRegisterForm = {
  formData: TypeRegistration | null;
  passwordSafeness: number;
  goToCreateForm: boolean;
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
