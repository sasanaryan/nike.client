import { TextField } from "@mui/material";
import React from "react";

interface SearchBarProp {
  setOpenSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
  openSearchBar: boolean;
}
const SearchBar = ({ setOpenSearchBar, openSearchBar }: SearchBarProp) => {
  return (
    <div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </div>
  );
};

export default SearchBar;
