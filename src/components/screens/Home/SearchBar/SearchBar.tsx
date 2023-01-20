import { FilterButton } from "@components/ui/Buttons";
import { MainInput } from "@components/ui/Inputs";
import { InputAdornment, Stack } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <Stack direction="row" spacing={1}>
      <MainInput
        placeholder="Поиск"
        height="60px"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "grey.0" }} />
            </InputAdornment>
          ),
        }}
      />
      <FilterButton />
    </Stack>
  );
};

export default SearchBar;
