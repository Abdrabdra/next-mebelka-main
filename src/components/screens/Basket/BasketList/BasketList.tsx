import { Box, Container, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useTypedSelector } from "@store/index";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useState } from "react";
import numberWithSpaces from "@utils/numberWithSpaces";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { deleteBasketItem } from "@store/reducers/basket/basket.slice";
import Image from "next/image";

import mockPicture from "@assets/img/krovat_Olimpia.png";

const BasketList = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const basketItems = useTypedSelector((state) => state.basket.items);

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

  return (
    <Container>
      <Stack spacing={2}>
        {basketItems.length === 0 ? (
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ height: "80vh", fontSize: "16px" }}
          >
            Корзина Пуста
          </Stack>
        ) : (
          basketItems.map((row) => (
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              sx={{
                height: "124px",
                backgroundColor: "secondary.main",
                padding: "8px",
                borderRadius: "12px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "primary.main",
                  borderRadius: "12px",
                  width: "108px",
                  height: "108px",
                }}
              >
                <Image
                  src={mockPicture}
                  alt="Picture of the author"
                  style={{
                    width: "100%",
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
                  <Stack direction="row" justifyContent={"space-between"}>
                    <Typography
                      onClick={() => handleClick(row.id)}
                      sx={{
                        fontSize: "18px",
                        letterSpacing: "1px",
                        color: "primary.main",
                        cursor: "pointer",
                      }}
                    >
                      Диван “Lanister”
                    </Typography>

                    <IconButton
                      size="small"
                      onClick={() => handleDelete(row.id)}
                    >
                      <DeleteOutlinedIcon fontSize="small" />
                    </IconButton>
                  </Stack>

                  <Stack spacing={1} direction="row">
                    <Box
                      sx={{
                        width: 19,
                        height: 19,
                        borderRadius: "50%",
                        backgroundColor: "common.black",
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: 500,
                        color: "primary.main",
                        letterSpacing: "1px",
                      }}
                    >
                      Черный
                    </Typography>
                  </Stack>
                </Stack>

                <Stack
                  direction="row"
                  justifyContent={"space-between"}
                  sx={{ flex: 1 }}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{
                      backgroundColor: "common.white",
                      borderRadius: "12px",
                      height: "31px",
                      width: "110px",
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                  >
                    <IconButton
                      onClick={handleDecrement}
                      disabled={state === 1}
                    >
                      <ArrowBackIosNewRoundedIcon fontSize="small" />
                    </IconButton>
                    {state}
                    <IconButton onClick={handleIncrement}>
                      <ArrowForwardIosRoundedIcon fontSize="small" />
                    </IconButton>
                  </Stack>

                  <Typography
                    sx={{
                      alignSelf: "end",
                      fontWeight: 700,
                      fontSize: "16px",
                      letterSpacing: "1px",
                      color: "primary.main",
                    }}
                  >
                    {numberWithSpaces(450000)}тг
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          ))
        )}
      </Stack>
    </Container>
  );
};

export default BasketList;
