import { Button, Stack, Typography } from "@mui/material";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const ProfileAddress = () => {
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
        Адрес доставки
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
          <Typography>г.Алматы, Толе би 189д</Typography>
          <ArrowForwardIosRoundedIcon
            fontSize="small"
            sx={{ color: "common.black" }}
          />
        </Stack>
      </Button>
    </Stack>
  );
};

export default ProfileAddress;
