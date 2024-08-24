import { FaLock } from "react-icons/fa6";
import EntryFormLayout from "../../layout/entryFormLayout/EntryFormLayout";
import { useSelector } from "react-redux";
import { RootState } from "../../store/types/types";
import GetPasswordForm from "../../widgets/forms/startPageForms/GetPasswordForm";
import { StartPageForm } from "../../widgets/forms/startPageForms/emailForm";

const StartPage = () => {
  
  const { emailEntered } = useSelector((state: RootState) => state.loginForm);

  return (
    <EntryFormLayout>
      <div className="start-page__title-wrapper">
        <FaLock />
        <h1 className="start-page__title">
          Lock
          {""}
          <span>
            <strong>Kipper</strong>
          </span>
        </h1>
      </div>
      <h3 className="start-page-description">
        Log in or create a new account to access your secure storage.
      </h3>
      {emailEntered ? <GetPasswordForm /> : <StartPageForm />}
    </EntryFormLayout>
  );
};

export default StartPage;
