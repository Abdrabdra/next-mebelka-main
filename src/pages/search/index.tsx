import Search from "@components/screens/Search";
import { MainLayout } from "@layouts/MainLayout";

const SearchPage = () => {
  return (
    <MainLayout withFooter>
      <Search />
    </MainLayout>
  );
};

export default SearchPage;
