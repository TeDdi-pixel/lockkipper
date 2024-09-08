import DefaultLayout from "../../layout/defaultLayout/DefaultLayout";
import { ContentTable } from "../../widgets/contentTable";
import { Filters } from "../../widgets/filters";
import { VaultForm } from "../../widgets/forms/vaultForms";

const VaultPage = () => {
  return (
    <DefaultLayout title="All vaults">
      <div className="flex">
        <Filters />
        <ContentTable />
      </div>
      <VaultForm />
    </DefaultLayout>
  );
};

export default VaultPage;
