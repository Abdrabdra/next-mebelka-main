import { Stack } from "@mui/material";
import { IOneAnnouncement } from "@src/types/Announcements/IOneAnnouncement";
import { FC } from "react";
import DoubleTab from "./DoubleTab";

interface Props {
  data: IOneAnnouncement;
}

const AnnounceTabs: FC<Props> = ({ data }) => {
  return (
    <Stack
      sx={{
        backgroundColor: "secondary.main",
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      <DoubleTab commentsCount={data.status.commentCount} data={data} />
    </Stack>
  );
};

export default AnnounceTabs;
