import { Box, Divider, Stack, Typography } from "@mui/material";
import numberWithSpaces from "@utils/numberWithSpaces";
import Image from "next/image";
import { useRouter } from "next/router";

import mockPicture from "@assets/img/krovat_Olimpia.png";
import { OrderItem } from "@src/types/Order/IOrder";
import { FC } from "react";
import { $image_api } from "@api/index";

interface Props {
  data: OrderItem[][];
}

const OrderOneBox: FC<Props> = ({ data }) => {
  const router = useRouter();

  const handleNavigate = (id: number) => {
    router.push(`/announce/${id}`);
  };

  return (
    <Stack spacing={1}>
      {data.map((market) =>
        market.map((item) => (
          <Stack
            key={item.id}
            direction={"row"}
            alignItems="center"
            spacing={2}
            sx={{
              padding: "8px",
              borderRadius: "12px",
              backgroundColor: "secondary.main",
            }}
          >
            <Box
              sx={{
                width: "108px",
                height: "108px",
                borderRadius: "12px",
                backgroundColor: "primary.main",
              }}
            >
              <Image
                loader={() =>
                  `${$image_api}/${item.product.images[0].imageUrl}`
                }
                src={`${$image_api}/${item.product.images[0].imageUrl}`}
                alt="Picture of the author"
                width={108}
                height={108}
                style={{
                  height: "108px",
                  borderRadius: "12px",
                  backgroundRepeat: "no-repeat",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Box>

            <Stack spacing={1.5} sx={{ flex: 1 }}>
              <Stack spacing={1}>
                <Stack
                  direction={"row"}
                  justifyContent="space-between"
                  onClick={() => handleNavigate(item.product.id)}
                >
                  <Typography
                    sx={{
                      fontSize: "18px",
                      color: "primary.main",
                    }}
                  >
                    {item.product.title}
                  </Typography>
                </Stack>

                <Stack direction={"row"} spacing={1} alignItems="center">
                  <Box
                    sx={{
                      borderRadius: "50%",
                      backgroundColor: "common.black",
                      width: "16px",
                      height: "16px",
                    }}
                  />
                  <Typography sx={{ fontSize: "12px", fontWeight: 500 }}>
                    Цвет
                  </Typography>

                  <Divider orientation="vertical" variant="middle" flexItem />

                  <Typography sx={{ fontSize: "12px", color: "#BABABA" }}>
                    {item.qty} кол-во
                  </Typography>
                </Stack>
              </Stack>

              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "primary.main",
                }}
              >
                {numberWithSpaces(Number(item.product.price.toFixed(2)))}тг
              </Typography>
            </Stack>
          </Stack>
        ))
      )}
    </Stack>
  );
};

export default OrderOneBox;
