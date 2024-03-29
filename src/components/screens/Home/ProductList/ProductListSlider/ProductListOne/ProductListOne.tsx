import { Divider, Icon, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { INFO } from "@utils/theme/palette";
import Image from "next/image";

import mockPicture from "@assets/img/krovat_Olimpia.png";
import { useRouter } from "next/router";
import { IAnnouncement } from "@src/types/Announcements/IAnnouncement";
import { FC } from "react";

import StarIcon from "@mui/icons-material/Star";
import numberWithSpaces from "@utils/numberWithSpaces";
import { $image_api } from "@api/index";

interface Props {
  data: IAnnouncement;
}

const ProductListOne: FC<Props> = ({ data }) => {
  const router = useRouter();

  const handleClick = (value: number) => {
    router.push(`/announce/${value}`);
  };

  const discountedPrice = data.discount
    ? (data.price * (100 - data.discount)) / 100
    : data.price;

  return (
    <Stack
      onClick={() => handleClick(data.id)}
      spacing={1.5}
      sx={{
        cursor: "pointer",
        width: "194px",
        backgroundColor: "secondary.main",
        borderRadius: "20px",
        padding: "12px",
      }}
    >
      <Image
        loader={
          data.images.length > 0
            ? () => `${$image_api}/${data?.images[0].imageUrl}`
            : undefined
        }
        src={
          data.images.length > 0
            ? `${$image_api}/${data?.images[0].imageUrl}`
            : ""
        }
        alt="Picture of the author"
        height={116}
        width={100}
        style={{
          width: "100%",
          borderRadius: "12px",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      <Stack spacing={1}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 400,
            fontSize: "14px",
            color: "primary.main",
            lineHeight: "18.24px",
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {data.title}
        </Typography>

        <Stack spacing={1} direction="row" alignItems={"center"}>
          <Icon component={StarIcon} sx={{ fontSize: "18px" }} />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "12px",
              letterSpacing: "1px",
              color: "primary.main",
            }}
          >
            4.7
          </Typography>

          {data.discount ? (
            <>
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{ backgroundColor: "secondary.700" }}
              />
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "1px",
                  color: "error.main",
                }}
              >
                -{data.discount}%
              </Typography>
            </>
          ) : null}
        </Stack>

        <Stack direction="row" spacing={0.65}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            {numberWithSpaces(discountedPrice)}тг
          </Typography>
          {data.discount ? (
            <Typography
              sx={{
                alignSelf: "flex-end",
                color: "info.400",
                fontWeight: 300,
                fontSize: "8px",
                letterSpacing: "1px",
                position: "relative",

                "&:after": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "1px",
                  backgroundColor: alpha(INFO[400], 0.7),
                  opacity: 0.8,
                  top: 0,
                  bottom: 0,
                  left: 0,
                  marginTop: "auto",
                  marginBottom: "auto",
                },
              }}
            >
              {numberWithSpaces(data.price)}тг
            </Typography>
          ) : null}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductListOne;
