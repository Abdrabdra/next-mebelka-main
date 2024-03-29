import { Stack, Typography } from "@mui/material";
import { IColors, IImages } from "@src/types/Announcements/IOneAnnouncement";
import { FC } from "react";

interface Props {}

const AnnounceDescription: FC<Props> = () => {
  return (
    <Stack
      spacing={1}
      sx={{
        backgroundColor: "secondary.main",
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
        Описание товара
      </Typography>
      <Typography
        sx={{ fontSize: "14px", fontWeight: 500, color: "secondary.500" }}
      >
        Нужно добавить описание
      </Typography>
    </Stack>
  );
};

export default AnnounceDescription;
