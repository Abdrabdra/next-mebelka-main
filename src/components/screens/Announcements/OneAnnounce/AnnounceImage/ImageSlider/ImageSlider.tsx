import { Box, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { FC } from "react";
import { $image_api } from "@api/index";
import { IImages } from "@src/types/Announcements/IOneAnnouncement";
import Image from "next/image";

interface Props {
  data: IImages[];
}

const ImageSlider: FC<Props> = ({ data }) => {
  return (
    <Box>
      <Swiper
        className={"oneAnnounceImageSlider"}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >
        {data.map((row) => (
          <SwiperSlide key={row.id}>
            <Image
              loader={() => `${$image_api}/${row.imageUrl}`}
              src={`${$image_api}/${row.imageUrl}`}
              width={200}
              height={350}
              style={{
                width: "100%",
                backgroundRepeat: "no-repeat",
                objectFit: "contain",
                objectPosition: "center",
              }}
              alt={"Product"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ImageSlider;
