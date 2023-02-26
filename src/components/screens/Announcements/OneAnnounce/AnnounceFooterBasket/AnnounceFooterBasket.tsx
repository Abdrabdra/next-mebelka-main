import { MainButton } from "@components/ui/Buttons";
import { Stack } from "@mui/material";

import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import {
  deleteBasketItem,
  updateBasket,
} from "@store/reducers/basket/basket.slice";
import { useTypedSelector } from "@store/index";
import { FC, useEffect, useState } from "react";
import { number } from "yup";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import {
  useCreateCartMutation,
  useDeleteCartMutation,
} from "@store/rtk-api/announcement-rtk/announcementEndpoints";

interface Props {
  productId: number;
}

const AnnounceFooterBasket: FC<Props> = ({ productId }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const basketItems = useTypedSelector((state) => state.basket.items);

  const [inBasket, setInBasket] = useState(false);

  useEffect(() => {
    // if (basketItems.filter((row) => row.id == Number(id)).length > 0) {
    //   setInBasket(true);
    // } else {
    //   setInBasket(false);
    // }
  }, [basketItems]);

  const [createCart, data] = useCreateCartMutation();
  const [deleteCart] = useDeleteCartMutation();

  const handleAddToBasket = () => {
    createCart({ qty: 1, productId: Number(productId) });
  };

  console.log(data);

  const handleDeleteFromBasket = () => {
    // deleteCart();
  };

  const handleNavigate = () => {
    router.push("/basket");
  };

  return (
    <Stack
      direction={"row"}
      spacing={1.25}
      sx={{
        position: "fixed",
        bottom: 0,
        zIndex: 99999999,
        backgroundColor: "common.white",
        borderRadius: "20px 20px 0 0",
        padding: "16px",
        boxShadow: "0px -5px 10px rgba(0, 0, 0, 0.05)",
        width: "100%",
        height: "85px",
      }}
    >
      {inBasket ? (
        <MainButton
          onClick={handleDeleteFromBasket}
          bgcolor="secondary.main"
          startIcon={<ThumbUpOutlinedIcon />}
          sx={{
            fontWeight: 600,
            fontSize: "14px",
            textTransform: "initial",
            color: "primary.main",

            "&:focus, &:hover": {
              borderColor: "secondary.main",
              backgroundColor: "secondary.main",
            },
          }}
        >
          Уже в корзине
        </MainButton>
      ) : (
        <MainButton
          onClick={handleAddToBasket}
          bgcolor="secondary.main"
          startIcon={<AddRoundedIcon />}
          sx={{
            fontWeight: 600,
            fontSize: "14px",
            textTransform: "initial",
            color: "primary.main",

            "&:focus, &:hover": {
              borderColor: "secondary.main",
              backgroundColor: "secondary.main",
            },
          }}
        >
          Добавить в корзину
        </MainButton>
      )}

      <MainButton
        onClick={handleNavigate}
        bgcolor="secondary.300"
        sx={{ fontWeight: 600, fontSize: "14px", textTransform: "initial" }}
      >
        Перейти в корзину
      </MainButton>
    </Stack>
  );
};

export default AnnounceFooterBasket;
