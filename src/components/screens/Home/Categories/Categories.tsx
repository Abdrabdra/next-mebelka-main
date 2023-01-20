import { Button, Icon, Stack, Typography } from "@mui/material";

import WindowIcon from "@mui/icons-material/Window";
import LightIcon from "@mui/icons-material/Light";
import CountertopsIcon from "@mui/icons-material/Countertops";
import CropLandscapeIcon from "@mui/icons-material/CropLandscape";
import ScienceIcon from "@mui/icons-material/Science";
import BedIcon from "@mui/icons-material/Bed";

const categories = [
  {
    id: 0,
    title: "Категории",
    icon: WindowIcon,
  },
  {
    id: 1,
    title: "Освещение",
    icon: LightIcon,
  },
  {
    id: 2,
    title: "Сантехника и климат",
    icon: CountertopsIcon,
  },
  {
    id: 3,
    title: "Стены",
    icon: CropLandscapeIcon,
  },
  {
    id: 4,
    title: "Декор",
    icon: ScienceIcon,
  },
  {
    id: 5,
    title: "Мебель",
    icon: BedIcon,
  },
];

const Categories = () => {
  return (
    <Stack direction={"row"} sx={{ flexWrap: "wrap", gap: "16px" }}>
      {categories.map((row) => (
        <Stack
          key={row.id}
          spacing={1}
          sx={{
            flex: "1 1 calc(33.333% - 16px * 2 / 3)",
          }}
        >
          <Button
            key={row.id}
            sx={{
              backgroundColor: "secondary.main",
              borderRadius: "12px",
              height: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon component={row.icon} color="primary" />
          </Button>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "14.32px",
              letterSpacing: "-0.33px",
              color: "primary.main",
            }}
          >
            {row.title}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default Categories;
