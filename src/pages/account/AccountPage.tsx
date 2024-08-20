import DefaultLayout from "../../layout/defaultLayout/DefaultLayout";
import { AccountForm } from "../../widgets/forms/accountForms";

const AccountPage = () => {
  return (
    <DefaultLayout title="My account">
      <AccountForm />
    </DefaultLayout>
  );
};

export default AccountPage;
