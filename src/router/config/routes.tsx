import { lazy } from "react";
import CreateAccountForm from "../../widgets/forms/startPageForms/CreateAccountForm";
import VaultPage from "../../pages/VaultPage";

const StartPage = lazy(() => import("../../pages/StartPage"));
export const routes = [
  { id: 0, path: "/", element: <StartPage /> },
  { id: 1, path: "/create_account_form", element: <CreateAccountForm /> },
  {id: 2,path:"/vault", element: <VaultPage/>}
];
