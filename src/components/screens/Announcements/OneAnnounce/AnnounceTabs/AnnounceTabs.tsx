import { Stack } from "@mui/material";
import DoubleTab from "./DoubleTab";

const AnnounceTabs = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "secondary.main",
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      <DoubleTab commentsCount={99} />
    </Stack>
  );
};

export default AnnounceTabs;
