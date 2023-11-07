import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import React, { FC } from "react";
import { $image_api } from "@api/index";
import { IImages } from "@src/types/Announcements/IOneAnnouncement";
import Image from "next/image";
import ImageGalleryWithDialog from "./ImageGalleryWithDialog";

interface Props {
  data: IImages[];
}

const ImageSlider: FC<Props> = ({ data }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleImageClick = () => {
    setOpen(true);
  };

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
              onClick={handleImageClick}
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

      {open && (
        <ImageGalleryWithDialog
          handleClose={handleClose}
          open={open}
          data={data}
        />
      )}
    </Box>
  );
};

export default ImageSlider;
