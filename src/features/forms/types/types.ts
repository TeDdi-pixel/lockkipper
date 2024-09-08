export type TypeLogin = {
  email: string;
  exampleRequired?: string;
  emailIsRemembered?: boolean;
  password: string;
};

export type TypeRegistration = {
  uid: string;
  email: string;
  displayName: string;
  password: string;
  reEnteredPassword: string;
  hint: string;
  photoURL: string | null;
};
