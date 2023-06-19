import { Box, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";

const banners = [
  {
    title: "До конца декабря",
    text: "- 70%",
  },
  {
    title: "До конца декабря",
    text: "- 50%",
  },
  {
    title: "До конца декабря",
    text: "- 30%",
  },
];

const BannerSlider = () => {
  return (
    <Box>
      <Swiper
        className={"homeSlider"}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <Stack
              direction={"row"}
              sx={{
                display: "flex",
                backgroundColor: "common.black",
                height: "180px",
                borderRadius: "12px",
              }}
            >
              <Image
                src={"/pictures/banner_main.jpg"}
                width={1920}
                height={1080}
                alt={"bannerImage"}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px",
                  backgroundRepeat: "no-repeat",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              {/* <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flex: 1,
                }}
              >
                <Stack justifyContent={"center"}>
                  <Typography variant="h6" color="common.white">
                    {banner.title}
                  </Typography>
                  <Typography variant="subtitle2" color="common.white">
                    {banner.text}
                  </Typography>
                </Stack>
              </Box> */}
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default BannerSlider;
