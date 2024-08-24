import { useSelector } from "react-redux";
import { RootState } from "../../../../store/types/types";
import CreateAccountForm from "../../../../features/CreateAccountForm";
import GetPasswordForm from "../../../../features/GetPasswordForm";
import { EmailForm } from "../../../../features/forms/emailForm";

export const EntryForm = () => {
  const { currentForm } = useSelector((state: RootState) => state.auth);
  //Using Factory Method
  switch (currentForm) {
    case "emailForm":
      return <EmailForm />;
    case "passwordForm":
      return <GetPasswordForm />;
    case "createAccountForm":
      return <CreateAccountForm />;
    default:
      return <EmailForm />;
  }
};
