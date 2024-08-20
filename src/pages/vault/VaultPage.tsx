import DefaultLayout from "../../layout/defaultLayout/DefaultLayout";
import { ContentTable } from "../../widgets/contentTable";
import { Filters } from "../../widgets/filters";

const VaultPage = () => {
  return (
    <DefaultLayout title="All vaults">
      <Filters />
      <ContentTable />
    </DefaultLayout>
  );
};

export default VaultPage;
