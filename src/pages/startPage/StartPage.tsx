import { FaLock } from "react-icons/fa6";
import EntryFormLayout from "../../layout/entryFormLayout/EntryFormLayout";
import { EntryForm } from "../../widgets/forms/entryForm";
const StartPage = () => {
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
      <EntryForm />
    </EntryFormLayout>
  );
};

export default StartPage;
