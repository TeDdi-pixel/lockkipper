import { useSelector } from "react-redux";
import { RootState } from "../../../../store/types/types";
import { EmailForm } from "../../../../features/forms/emailForm";
import { PasswordForm } from "../../../../features/forms/passwordForm";
import { CreateAccountForm } from "../../../../features/forms/createAccountForm";

export const EntryForm = () => {
  const { currentForm } = useSelector((state: RootState) => state.auth);
  //Using Factory Method
  switch (currentForm) {
    case "emailForm":
      return <EmailForm />;
    case "passwordForm":
      return <PasswordForm />;
    case "createAccountForm":
      return <CreateAccountForm />;
    default:
      return <EmailForm />;
  }
};
