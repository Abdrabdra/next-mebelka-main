import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import BannerSlider from "./BannerSlider";

interface Props {
  bannerTitle?: string;
}

const Banner: FC<Props> = ({ bannerTitle }) => {
  return (
    <Stack spacing={1.5}>
      {bannerTitle && (
        <Typography
          sx={{
            color: "primary.main",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "17px",
            letterSpacing: "2px",
          }}
        >
          {bannerTitle}
        </Typography>
      )}

      <BannerSlider />
    </Stack>
  );
};

export default Banner;
