import { Container, Stack } from "@mui/material";
import Banner from "./Banner";
import Categories from "./Categories";
import ProductList from "./ProductList";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <Container>
      <Stack spacing={3}>
        <SearchBar />
        <Banner bannerTitle="Скидки и предложения" />
        <Categories />

        <ProductList productTitle="Освещение" />
      </Stack>
    </Container>
  );
};

export default Home;
