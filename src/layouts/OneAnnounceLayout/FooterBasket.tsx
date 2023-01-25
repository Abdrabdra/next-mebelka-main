import { MainButton } from "@components/ui/Buttons";
import { Stack } from "@mui/material";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { updateBasket } from "@store/reducers/basket/basket.slice";
import { useTypedSelector } from "@store/index";
import { useEffect, useState } from "react";
import { number } from "yup";

const FooterBasket = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  const basketItems = useTypedSelector((state) => state.basket.items);

  const [inBasket, setInBasket] = useState(false);

  useEffect(() => {
    if (basketItems.filter((row) => row.id == Number(id)).length > 0) {
      setInBasket(true);
    }
  }, [basketItems]);

  const handleAddToBasket = () => {
    id && dispatch(updateBasket({ id: id }));
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

export default FooterBasket;
