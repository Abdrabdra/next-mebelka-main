import { Box, Stack, Typography } from "@mui/material";

const AnnounceColors = () => {
  return (
    <Stack
      spacing={1.5}
      sx={{
        backgroundColor: "secondary.main",
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>Цвета</Typography>

      <Stack direction="row" spacing={1.5}>
        <Box
          sx={{
            width: "30px",
            height: "30px",
            borderRadius: "100%",
            backgroundColor: "common.black",
          }}
        />
        <Box
          sx={{
            width: "30px",
            height: "30px",
            borderRadius: "100%",
            backgroundColor: "common.white",
          }}
        />
      </Stack>
    </Stack>
  );
};

export default AnnounceColors;
