import DefaultLayout from "../layout/defaultLayout/DefaultLayout";
import ContentTable from "../widgets/contentTable/ContentTable";
import Filters from "../widgets/filters/Filters";

const VaultPage = () => {
  return (
    <DefaultLayout title="All vaults">
      <Filters />
      <ContentTable/>
    </DefaultLayout>
  );
};

export default VaultPage;
