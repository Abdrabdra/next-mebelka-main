import { Box, Divider, Stack, Typography } from "@mui/material";
import numberWithSpaces from "@utils/numberWithSpaces";

const DetailsTab = ({ details }: any) => {
  const stateData = [
    { id: 0, title: "Наименование", value: "Test" },
    { id: 1, title: "Производство", value: "Test" },
    { id: 2, title: "Длина (mm)", value: "Test" },
    { id: 3, title: "Ширина (mm)", value: "Test" },
    { id: 4, title: "Высота (mm)", value: "Test" },
    { id: 5, title: "Каркас", value: "Test" },
    { id: 6, title: "Декор", value: "Test" },
    { id: 7, title: "Подъемный механизм", value: "Test" },
    { id: 8, title: "Ящики для белья", value: "Test" },
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
