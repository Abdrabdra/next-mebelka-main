import { alpha, Box, Container, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useTypedSelector } from "@store/index";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { FC, useState } from "react";
import numberWithSpaces from "@utils/numberWithSpaces";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { deleteBasketItem } from "@store/reducers/basket/basket.slice";
import Image from "next/image";

import mockPicture from "@assets/img/krovat_Olimpia.png";
import { IGetCart } from "@src/types/Cart/ICart";
import { INFO } from "@utils/theme/palette";
import { $image_api } from "@api/index";

interface Props {
  data: IGetCart[];
}

const BasketList: FC<Props> = ({ data }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [state, setState] = useState(1);

  const handleDecrement = () => {
    if (state === 1) {
      return;
    }

    setState(state - 1);
  };

  const handleIncrement = () => {
    setState(state + 1);
  };

  const handleClick = (id: number) => {
    router.push(`/announce/${id}`);
  };

  const handleDelete = (id: number) => {
    dispatch(deleteBasketItem(id));
  };

  const discountPrice = (discount: number, price: number) => {
    return ((price * (100 - discount)) / 100).toFixed(2);
  };

  return (
    <Stack spacing={2}>
      {data.length === 0 ? (
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ height: "80vh", fontSize: "16px" }}
        >
          Корзина Пуста
        </Stack>
      ) : (
        data.map((row) => (
          <Stack
            spacing={2}
            direction="row"
            alignItems="center"
            sx={{
              backgroundColor: "secondary.main",
              padding: "12px",
              borderRadius: "12px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "primary.main",
                borderRadius: "12px",
                width: "80px",
                height: "80px",
              }}
            >
              <Image
                // loader={() => `${$image_api}/${row.product.images[0].imageUrl}`}
                // src={`${$image_api}/${row.product.images[0].imageUrl}`}
                src={mockPicture}
                alt="Picture of the author"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px",
                  backgroundRepeat: "no-repeat",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Box>

            <Stack spacing={1.5} sx={{ flex: 1 }}>
              <Stack spacing={1}>
                <Stack direction={"row"} justifyContent="space-between">
                  <Typography
                    onClick={() => handleClick(row.product.id)}
                    sx={{
                      fontSize: "18px",
                      letterSpacing: "1px",
                      color: "primary.main",
                      cursor: "pointer",
                    }}
                  >
                    {row.product.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      letterSpacing: "1px",
                      color: "#898989",
                    }}
                  >
                    Кол-во:{" "}
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "common.black",
                      }}
                    >
                      {row.qty}
                    </Typography>
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={1}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "16px",
                      letterSpacing: "1px",
                      color: "primary.main",
                    }}
                  >
                    {numberWithSpaces(
                      Number(
                        row.product.discount
                          ? discountPrice(
                              row.product.discount,
                              row.product.price
                            )
                          : row.product.price
                      )
                    )}
                    тг
                  </Typography>
                  {row.product.discount && (
                    <Typography
                      sx={{
                        alignSelf: "flex-end",
                        color: "info.400",
                        fontWeight: 300,
                        fontSize: "14px",
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
                      {row.product.price}тг
                    </Typography>
                  )}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        ))
      )}
    </Stack>
  );
};

export default BasketList;
