import SearchInput from "./SearchInput";
import ToggleList from "../../../features/toggleList/ToggleList";
import LineTrough from "../../../shared/LineTrough";
import {
  allItems,
  existingVaults,
  folders,
} from "../../../features/toggleList/config/config";
import TrashItem from "./TrashItem";

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
