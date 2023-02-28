import { Container, Stack } from "@mui/material";
import { useTypedSelector } from "@store/index";
import { useGetAnnouncementsQuery } from "@store/rtk-api/announcement-rtk/announcementEndpoints";
import SearchBar from "../Home/SearchBar";
import ProductListVertical from "./ProductListVertical";
import ContentListPagination from "./ProductListVertical/ContentListPagination";

const Search = () => {
  const filterProductValues = useTypedSelector(
    (state) => state.productFilter.values
  );

  const queryWithFilterParams = {
    ...filterProductValues,
  };

  const { data, isLoading, isFetching, isSuccess } = useGetAnnouncementsQuery(
    queryWithFilterParams,
    {
      refetchOnMountOrArgChange: true,
    }
  );

  return (
    <Container>
      <Stack spacing={2}>
        <SearchBar />
        {data && (
          <>
            <ProductListVertical data={data} />
            <ContentListPagination count={data.count} />
          </>
        )}
      </Stack>
    </Container>
  );
};

export default Search;
