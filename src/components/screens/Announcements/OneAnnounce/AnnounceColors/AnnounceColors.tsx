import { Box, Stack, Typography } from "@mui/material";
import { IColors } from "@src/types/Announcements/IOneAnnouncement";
import { FC } from "react";

interface Props {
  colors: IColors[];
}

const AnnounceColors: FC<Props> = ({ colors }) => {
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
        {colors.map((row) => (
          <Box
            key={row.id}
            sx={{
              width: "30px",
              height: "30px",
              borderRadius: "100%",
              backgroundColor: row.value,
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default AnnounceColors;
