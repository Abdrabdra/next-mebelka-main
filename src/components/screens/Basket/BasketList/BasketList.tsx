import { Box, Container, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useTypedSelector } from "@store/index";

import { FC, useState } from "react";
import numberWithSpaces from "@utils/numberWithSpaces";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { deleteBasketItem } from "@store/reducers/basket/basket.slice";
import Image from "next/image";

import { IGetCart } from "@src/types/Cart/ICart";
import BasketListOne from "./BasketListOne";

interface Props {
  data: IGetCart[];
}

const BasketList: FC<Props> = ({ data }) => {
  return (
    <Container>
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
          data.map((row) => <BasketListOne key={row.id} data={row} />)
        )}
      </Stack>
    </Container>
  );
};

export default BasketList;
