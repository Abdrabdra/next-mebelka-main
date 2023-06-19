import { Box, Divider, Icon, Stack, Typography } from "@mui/material";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import { alpha } from "@mui/material/styles";
import { INFO } from "@utils/theme/palette";
import { useRouter } from "next/router";
import ProductListOne from "./ProductListOne/ProductListOne";
import { useGetAnnouncementsQuery } from "@store/rtk-api/announcement-rtk/announcementEndpoints";
import { useTypedSelector } from "@store/index";

const ProductListSlider = () => {
  // const filterProductValues = useTypedSelector(
  //   (state) => state.productFilter.values
  // );

  // const queryWithFilterParams = {
  //   ...filterProductValues,
  // };

  const { data, isLoading, isFetching, isSuccess } = useGetAnnouncementsQuery({
    page: 1,
    limit: 20,
  });

  const ref = useRef<any>();
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref?.current?.offsetWidth);
  }, []);
  const updateWidth = () => {
    setWidth(ref?.current?.offsetWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
  }, []);

  return (
    <Box ref={ref}>
      <Swiper className={"homeSlider"} slidesPerView={width / 207}>
        {data?.data.map((row) => (
          <SwiperSlide key={row.id}>
            <ProductListOne data={row} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProductListSlider;
