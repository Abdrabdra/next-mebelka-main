import { Stack } from "@mui/material";
import Image from "next/image";

import mockPicture from "@assets/img/krovat_Olimpia.png";
import { $image_api } from "@api/index";
import { IImages } from "@src/types/Announcements/IOneAnnouncement";
import { FC } from "react";
import ImageSlider from "./ImageSlider";

interface Props {
  data: IImages[];
}

const AnnounceImage: FC<Props> = ({ data }) => {
  return (
    <Stack sx={{ height: "350px", backgroundColor: "commmon.white" }}>
      <ImageSlider data={data} />
    </Stack>
  );
};

export default AnnounceImage;
