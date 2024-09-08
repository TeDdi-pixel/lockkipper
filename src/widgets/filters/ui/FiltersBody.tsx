import SearchInput from "./SearchInput";
import ToggleList from "../../../features/toggleList/ToggleList";
import LineTrough from "../../../shared/ui/LineTrough";
import TrashItem from "./TrashItem";
import { existingVaults } from "../config/existingVaults";
import { allItems } from "../config/allItems";
import useFolders from "../../../hooks/useFolders";

const FiltersBody = () => {
  const { folders } = useFolders("filterFolder");

  return (
    <div className="p-5 min-h-[50px] w-full">
      <SearchInput />
      <ToggleList listItems={existingVaults} title={"My vaults"} />
      <LineTrough mt="mt-[17.5px]" mb="mb-[30px]" />
      <ToggleList listItems={allItems} title={"All items"} />
      <ToggleList listItems={folders} title={"Folders"} />
      <TrashItem />
    </div>
  );
};

export default FiltersBody;
