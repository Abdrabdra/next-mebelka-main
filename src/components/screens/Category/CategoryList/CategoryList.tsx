import {
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import { useGetCategoryQuery } from "@store/rtk-api/announcement-rtk/announcementEndpoints";
import { MainButton } from "@components/ui/Buttons";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRouter } from "next/router";

const CategoryList = () => {
  const router = useRouter();

  const { data } = useGetCategoryQuery("");

  const handleNavigate = (id: number) => {
    router.push(`/category/${id}`);
  };

  return (
    <Container>
      <Stack spacing={2}>
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

export default CategoryList;
