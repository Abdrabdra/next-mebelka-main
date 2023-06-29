import { MainButton } from "@components/ui/Buttons";
import {
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  setProductFilter,
  setProductFilterHelper,
} from "@store/reducers/filter/productFilter/productFilter.slice";
import { useGetCategoryQuery } from "@store/rtk-api/announcement-rtk/announcementEndpoints";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ThirdChildCategory = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useGetCategoryQuery({ parentId: id });

  const dispatch = useDispatch();

  const handleNavigate = (childId: number) => {
    dispatch(setProductFilterHelper({ parentCategoryId: id }));
    dispatch(setProductFilter({ categoryId: childId }));

    router.push(`/search`);
  };

  return (
    <Container>
      <Stack>
        {data?.data?.map((row, i) => (
          <>
            <MainButton
              bgcolor="common.white"
              tcolor="primary"
              hovertcolor="common.white"
              onClick={() => handleNavigate(row.id)}
              sx={{ justifyContent: "space-between" }}
            >
              <Typography sx={{ fontSIze: "16px", fontWeight: 500 }}>
                {row.title}
              </Typography>
              <IconButton
                sx={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "secondary.main",
                  borderRadius: "12px",
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </MainButton>
            <Divider variant="middle" sx={{ mx: "20px !important" }} />
          </>
        ))}
      </Stack>
    </Container>
  );
};

export default ThirdChildCategory;
