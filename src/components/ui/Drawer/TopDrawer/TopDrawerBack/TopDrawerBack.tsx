import { Button, Stack } from "@mui/material";

import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { useRouter } from "next/router";

const TopDrawerBack = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ height: "64px" }}
    >
      <Button
        onClick={handleClick}
        sx={{ fontSize: "16px", fontWeight: 500, letterSpacing: "1px" }}
        startIcon={
          <ArrowBackIosRoundedIcon
            sx={{ fontSize: "16px !important", color: "common.black" }}
          />
        }
      >
        Назад
      </Button>
    </Stack>
  );
};

export default TopDrawerBack;
