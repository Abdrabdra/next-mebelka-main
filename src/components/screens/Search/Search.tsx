import { Container, Stack } from "@mui/material";
import SearchBar from "../Home/SearchBar";
import ProductListVertical from "./ProductListVertical";

const Search = () => {
  return (
    <Container>
      <Stack spacing={2}>
        <SearchBar />
        <ProductListVertical />
      </Stack>
    </Container>
  );
};

export default Search;
