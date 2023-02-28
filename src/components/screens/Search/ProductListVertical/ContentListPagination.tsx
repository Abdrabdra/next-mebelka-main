import { Pagination, Stack } from "@mui/material";
import { useTypedSelector } from "@store/index";
import { setProductFilter } from "@store/reducers/filter/productFilter/productFilter.slice";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";

interface Props {
  count: number;
}

const ContentListPagination: FC<Props> = ({ count }) => {
  const dispatch = useDispatch();

  const selectedLimit = useTypedSelector(
    (state) => state.productFilter.values.limit
  );
  const selectedPage = useTypedSelector(
    (state) => state.productFilter.values.page
  );

  const totalPages = Math.ceil(count / selectedLimit);

  const [page, setPage] = useState(selectedPage);
  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    dispatch(setProductFilter({ page: value }));
  };

  return count ? (
    <Stack alignItems={"center"}>
      <Pagination
        page={page}
        onChange={(e, value) => handleChange(e, value)}
        count={totalPages}
      />
    </Stack>
  ) : null;
};

export default ContentListPagination;
