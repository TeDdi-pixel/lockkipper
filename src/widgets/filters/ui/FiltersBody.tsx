import SearchInput from "./SearchInput";
import ToggleList from "../../../features/toggleList/ToggleList";
import LineTrough from "../../../shared/LineTrough";
import TrashItem from "./TrashItem";
import { existingVaults } from "../config/existingVaults";
import { allItems } from "../config/allItems";
import { folders } from "../config/folders";

const FiltersBody = () => {
  return (
    <div className="p-5 min-h-[50px] w-full">
      <SearchInput />
      <ToggleList listItems={existingVaults} title={"My vaults"} />
      <LineTrough />
      <ToggleList listItems={allItems} title={"All items"} />
      <ToggleList listItems={folders} title={"Folders"} />
      <TrashItem />
    </div>
  );
};

export default FiltersBody;
