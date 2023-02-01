import { Button, Stack, Typography } from "@mui/material";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const ProfileFavorite = () => {
  return (
    <Stack
      spacing={1.5}
      sx={{
        backgroundColor: "secondary.main",
        borderRadius: "12px",
        padding: "12px",
      }}
    >
      <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
        Избранные товары
      </Typography>

      <Button
        sx={{
          backgroundColor: "common.white",
          borderRadius: "12px",
          padding: "16px",
        }}
      >
        <Stack
          direction="row"
          justifyContent={"space-between"}
          sx={{ flex: 1 }}
        >
          <Typography>Избранные товары</Typography>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            sx={{ width: "50px" }}
          >
            <Typography>12</Typography>
            <ArrowForwardIosRoundedIcon
              fontSize="small"
              sx={{ color: "common.black" }}
            />
          </Stack>
        </Stack>
      </Button>
    </Stack>
  );
};

export default ProfileFavorite;
