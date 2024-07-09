import DefaultLayout from "../../layout/defaultLayout/DefaultLayout";
import AccountForm from "../../widgets/forms/accountForms/AccountForm";

const AccountPage = () => {
  return (
    <DefaultLayout title="My account">
      <AccountForm />
    </DefaultLayout>
  );
};

export default AccountPage;
