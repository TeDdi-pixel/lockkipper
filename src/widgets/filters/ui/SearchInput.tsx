import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  return (
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
  );
};

export default SearchInput;
