import { MainInput } from "@components/ui/Inputs";
import { InputAdornment, Stack } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { ProductFilterButton } from "@components/modules/Filters/ProductFilter";

const SearchBar = () => {
  return (
    <Stack direction="row">
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
      
      <ProductFilterButton withIcon />
    </Stack>
  );
};

export default SearchBar;
