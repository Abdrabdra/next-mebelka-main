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
            />

            <Stack spacing={1.5} sx={{ flex: 1 }}>
              <Stack spacing={1}>
                <Stack direction={"row"} justifyContent="space-between">
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
                      1
                    </Typography>
                  </Typography>
                </Stack>

                <Typography
                  sx={{
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
  );
};

export default BasketList;
