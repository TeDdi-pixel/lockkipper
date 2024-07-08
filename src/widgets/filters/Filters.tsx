import { InputAdornment, TextField } from "@mui/material";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import ToggleList from "../../features/toggleList/ToggleList";
import {
  allItems,
  existingVaults,
  folders,
} from "../../features/toggleList/config/config";
import { FaRegTrashCan } from "react-icons/fa6";
import SearchIcon from "@mui/icons-material/Search";
import LineTrough from "../../shared/LineTrough";
const Filters = () => {
  return (
    <div className="filters">
      <div className="filters__header">
        <div className="filters__header-title">Filters</div>
        <div className="filters__question-mark">
          <HiOutlineQuestionMarkCircle />
        </div> 
      </div>
      <div className="filters__body">
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          fullWidth
          label="Search"
          variant="outlined"
          size="small"
          type="text"
        />
        <ToggleList listItems={existingVaults} title={"My vaults"} />
        <LineTrough/>
        <ToggleList listItems={allItems} title={"All items"} />
        <ToggleList listItems={folders} title={"Folders"} />
        <div className="filters__trash">
          <FaRegTrashCan />
          <span>Trash</span>
        </div>
      </div>
    </div>
  );
};

export default Filters;
