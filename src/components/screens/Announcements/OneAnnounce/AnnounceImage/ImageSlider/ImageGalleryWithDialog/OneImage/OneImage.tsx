import { $image_api } from "@api/index";
import { Box, Stack } from "@mui/material";
import { IImages } from "@src/types/Announcements/IOneAnnouncement";
import Image from "next/image";
import React from "react";

interface Props {
  data: IImages;
}

const OneImage: React.FC<Props> = ({ data }) => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="center">
      <img
        src={`${$image_api}/${data.imageUrl}`}
        style={{
          height: "80vh",
          backgroundRepeat: "no-repeat",
          objectFit: "contain",
          objectPosition: "center",
        }}
        alt={"Product"}
      />
    </Stack>
  );
};

export default OneImage;
