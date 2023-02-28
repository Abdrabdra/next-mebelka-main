import { CircularProgress, Stack } from "@mui/material";

const BaseLoader = () => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ height: "calc(100vh - 200px)" }}
    >
      <CircularProgress />
    </Stack>
  );
};

export default BaseLoader;
