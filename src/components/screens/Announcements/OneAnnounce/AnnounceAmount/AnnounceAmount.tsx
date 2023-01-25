import { IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const AnnounceAmount = () => {
  const [state, setState] = useState(1);

  const handleDecrement = () => {
    if (state === 1) {
      return;
    }

    setState(state - 1);
  };

  const handleIncrement = () => {
    setState(state + 1);
  };

  return (
    <Stack
      spacing={1.5}
      sx={{
        backgroundColor: "secondary.main",
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
        Колличество
      </Typography>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          backgroundColor: "common.white",
          borderRadius: "12px",
          height: "40px",
          width: "110px",
          fontSize: "20px",
          fontWeight: 600,
        }}
      >
        <IconButton onClick={handleDecrement} disabled={state === 1}>
          <ArrowBackIosNewRoundedIcon />
        </IconButton>
        {state}
        <IconButton onClick={handleIncrement}>
          <ArrowForwardIosRoundedIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default AnnounceAmount;
