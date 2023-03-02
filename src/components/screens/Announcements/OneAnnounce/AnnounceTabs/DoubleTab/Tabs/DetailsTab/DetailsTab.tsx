import { Box, Divider, Stack, Typography } from "@mui/material";
import { IOneAnnouncement } from "@src/types/Announcements/IOneAnnouncement";
import numberWithSpaces from "@utils/numberWithSpaces";
import { FC } from "react";

interface Props {
  details: IOneAnnouncement;
}

const DetailsTab: FC<Props> = ({ details }) => {
  const stateData = [
    { id: 0, title: "Наименование", value: details?.title },
    { id: 1, title: "Производство", value: "Производство" },
    { id: 2, title: "Длина (mm)", value: details?.info?.length },
    { id: 3, title: "Ширина (mm)", value: details?.info?.width },
    { id: 4, title: "Высота (mm)", value: details?.info?.height },
    {
      id: 5,
      title: "Каркас",
      value: details?.info?.frames.map((row) => row?.title).join(", "),
    },
    { id: 6, title: "Декор", value: details?.info?.decor?.title },
    {
      id: 7,
      title: "Подъемный механизм",
      value: details?.info?.liftingMechanism ? "Да" : "Нет",
    },
    {
      id: 8,
      title: "Ящики для белья",
      value: details?.info?.laundryBoxes ? "Да" : "Нет",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "common.white",
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      <Stack>
        {stateData.map((row) => (
          <Stack key={row.id} spacing={1} sx={{ paddingTop: "0.5rem" }}>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{
                  flex: "1",
                  color: "secondary.900",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {row.title}
              </Typography>
              <Typography
                sx={{
                  flex: "1",
                  display: "display",
                  alignItems: "center",
                  fontWeight: 500,
                }}
              >
                {row.value}
              </Typography>
            </Box>
            {stateData.length !== row.id + 1 && <Divider />}
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default DetailsTab;
