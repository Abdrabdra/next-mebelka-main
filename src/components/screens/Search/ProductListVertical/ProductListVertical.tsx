import Image from "next/image";
import { alpha, Box, Divider, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

import { INFO } from "@utils/theme/palette";

import StarRoundedIcon from "@mui/icons-material/StarRounded";

import mockPicture from "@assets/img/krovat_Olimpia.png";
import { IAnnouncementsResponse } from "@src/types/Announcements/IAnnouncement";
import { FC } from "react";
import { $image_api } from "@api/index";
import numberWithSpaces from "@utils/numberWithSpaces";

interface Props {
  data: IAnnouncementsResponse;
}

const ProductListVertical: FC<Props> = ({ data }) => {
  const router = useRouter();

  const handleClick = (value: number) => {
    router.push(`/announce/${value}`);
  };

  const discountPrice = (price: number, discount: number) => {
    return (discount && (price * (100 - discount)) / 100).toFixed(2);
  };

  return (
    <Stack direction="row" sx={{ gap: "12px", flexWrap: "wrap" }}>
      {data.data.map((row) => (
        <Stack
          onClick={() => handleClick(row.id)}
          key={row.id}
          spacing={1.5}
          sx={{
            flex: `0 0 177px`,
            maxWidth: "177px",
            // flex: `0 0 calc(50% - 12px * 1 / 2)`,
            borderRadius: "20px",
            backgroundColor: "secondary.main",
            padding: "12px",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <Image
            loader={
              row.images.length > 0
                ? () => `${$image_api}/${row.images[0]?.imageUrl}`
                : undefined
            }
            src={
              row.images.length > 0
                ? `${$image_api}/${row.images[0]?.imageUrl}`
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
              sx={{
                color: "primary.main",
                letterSpacing: "1px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {row.title}
            </Typography>

            <Stack direction="row" spacing={1} alignItems="center">
              <StarRoundedIcon sx={{ fontSize: "20px" }} />
              <Typography
                sx={{
                  color: "primary.main",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                {row.status.avg}
              </Typography>
              {row.discount ? (
                <>
                  <Divider orientation="vertical" flexItem variant={"middle"} />
                  <Typography
                    sx={{
                      color: "error.main",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    -{row.discount}%
                  </Typography>
                </>
              ) : null}
            </Stack>
          </Stack>

          <Stack direction="row" spacing={0.65}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                letterSpacing: "1px",
              }}
            >
              {row.discount
                ? numberWithSpaces(
                    Number(discountPrice(row.price, row.discount))
                  )
                : numberWithSpaces(row.price)}
              тг
            </Typography>
            {row.discount ? (
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
                {row.price}тг
              </Typography>
            ) : null}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default ProductListVertical;
