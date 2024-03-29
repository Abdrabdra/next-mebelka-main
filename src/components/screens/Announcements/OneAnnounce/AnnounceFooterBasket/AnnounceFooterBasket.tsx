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
import { BaseModal } from "@components/ui/Modal";
import AuthBox from "@components/modules/PrivateRoute/AuthBox";
import { useIsUserAuth } from "@utils/useIsUserAuth";

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

  const ads = useIsUserAuth();
  const qty = useTypedSelector((state) => state.basket.values.qty);
  const handleAddToBasket = () => {
    if (ads) {
      console.log("qty: ", qty);
      createCart({ qty: qty, productId: Number(productId) });
    } else {
      handleOpenModal();
    }
  };

  const handleDeleteFromBasket = () => {
    // deleteCart();
  };

  const handleNavigate = () => {
    router.push("/basket");
  };

  // forModal
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <Stack
      direction={"row"}
      spacing={1.25}
      sx={{
        position: "fixed",
        bottom: 0,
        zIndex: 1290,
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
        <>
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
          <BaseModal open={open} handleClose={handleCloseModal}>
            <Stack
              sx={{
                backgroundColor: "common.white",
                borderRadius: "15px",
                padding: "20px",
                height: "150px",
              }}
            >
              <AuthBox />
            </Stack>
          </BaseModal>
        </>
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
