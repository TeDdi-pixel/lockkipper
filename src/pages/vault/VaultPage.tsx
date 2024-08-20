import { Table } from "../../features/table";
import DefaultLayout from "../../layout/defaultLayout/DefaultLayout";
import { Filters } from "../../widgets/filters";

const VaultPage = () => {
  return (
    <DefaultLayout title="All vaults">
      <Filters />
      <Table/>
    </DefaultLayout>
  );
};

export default VaultPage;
