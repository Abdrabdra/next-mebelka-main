import { Button, Icon, Stack, Typography } from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { useRouter } from "next/router";

import WindowIcon from "@mui/icons-material/Window";
import LightIcon from "@mui/icons-material/Light";
import CountertopsIcon from "@mui/icons-material/Countertops";
import CropLandscapeIcon from "@mui/icons-material/CropLandscape";
import ScienceIcon from "@mui/icons-material/Science";
import BedIcon from "@mui/icons-material/Bed";

import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";

const categories = [
  // {
  //   id: 0,
  //   title: "Категории",
  //   icon: WindowIcon,
  // },
];

const ContentCategories = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/category");
  };

  const handleApplication = () => {
    router.push("/application");
  };

  return (
    <Stack spacing={1.5}>
      {/* <Typography
        sx={{ color: "info.900", fontSize: "14px", letterSpacing: "1px" }}
      >
        Основные категории товаров
      </Typography> */}

      <Stack spacing={2}>
        <>
          {/* {categories.map((row) => (
            <Button
              key={row.id}
              onClick={handleNavigate}
              sx={{
                backgroundColor: "secondary.main",
                borderRadius: "12px",
                padding: "8px",
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <Stack
                alignContent={"center"}
                justifyContent="center"
                sx={{
                  backgroundColor: "common.white",
                  borderRadius: "100%",
                  width: "40px",
                  height: "40px",
                }}
              >
                <Icon component={row.icon} sx={{ alignSelf: "center" }} />
              </Stack>

              <Typography
                sx={{
                  flex: 1,
                  textAlign: "start",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "primary.main",
                }}
              >
                {row.title}
              </Typography>

              <Stack
                alignContent={"center"}
                justifyContent="center"
                sx={{
                  width: "40px",
                  height: "40px",
                }}
              >
                <Icon
                  fontSize="medium"
                  component={KeyboardArrowRightRoundedIcon}
                  sx={{ alignSelf: "center" }}
                />
              </Stack>
            </Button>
          ))} */}
          <Button
            onClick={handleApplication}
            sx={{
              backgroundColor: "primary.main",
              borderRadius: "12px",
              padding: "8px",
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <Stack
              alignContent={"center"}
              justifyContent="center"
              sx={{
                backgroundColor: "common.white",
                borderRadius: "100%",
                width: "40px",
                height: "40px",
              }}
            >
              <Icon
                component={StorefrontRoundedIcon}
                sx={{ alignSelf: "center" }}
              />
            </Stack>

            <Typography
              sx={{
                flex: 1,
                textAlign: "start",
                fontSize: "14px",
                fontWeight: 500,
                color: "common.white",
              }}
            >
              Сотрудничать
            </Typography>

            <Stack
              alignContent={"center"}
              justifyContent="center"
              sx={{
                width: "40px",
                height: "40px",
              }}
            >
              <Icon
                fontSize="medium"
                component={KeyboardArrowRightRoundedIcon}
                sx={{ alignSelf: "center", color: "common.white" }}
              />
            </Stack>
          </Button>
        </>
      </Stack>
    </Stack>
  );
};

export default ContentCategories;
