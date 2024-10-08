import { lazy } from "react";
import VaultPage from "../../pages/vault/VaultPage";
import AccountPage from "../../pages/account/AccountPage";
import { CreateAccountForm } from "../../features/forms/createAccountForm";

const StartPage = lazy(() => import("../../pages/startPage/StartPage"));
export const routes = [
  { id: 0, path: "/", element: <StartPage /> },
  { id: 1, path: "/create_account_form", element: <CreateAccountForm /> },
  { id: 2, path: "/vaults/my_vault", element: <VaultPage /> },
  { id: 3, path: "/settings/account", element: <AccountPage /> },
];
