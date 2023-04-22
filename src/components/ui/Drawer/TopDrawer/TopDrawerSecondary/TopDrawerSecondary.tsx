import { Box, Container, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";

import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

const TopDrawerSecondary = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.back();
  };

  console.log("router: ", router.pathname);

  return router.pathname === "/basket/confirm/address" ||
    router.pathname === "/basket/confirm/payment" ||
    router.pathname === "/basket/confirm/total" ? (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "64px", position: "relative" }}
    >
      <Box
        sx={{
          position: "absolute",
          left: 0,
        }}
      >
        <IconButton onClick={handleNavigate} sx={{ color: "common.black" }}>
          <ArrowBackIosRoundedIcon />
        </IconButton>
      </Box>
      <Typography sx={{ fontSize: "16px", letterSpacing: "1px" }}>
        {router.pathname === "/basket/confirm/address"
          ? "Данные о местоположении"
          : router.pathname === "/basket/confirm/payment"
          ? "Способ оплаты"
          : "Итого к оплате"}
      </Typography>
    </Stack>
  ) : (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "64px", position: "relative" }}
    >
      {(router.pathname === "/application" ||
        router.pathname === "/category" ||
        router.pathname === "/category/[id]") && (
        <Box sx={{ position: "absolute", left: 0 }}>
          <IconButton onClick={handleNavigate} sx={{ color: "common.black" }}>
            <ArrowBackIosRoundedIcon />
          </IconButton>
        </Box>
      )}
      <Typography sx={{ fontSize: "16px", letterSpacing: "1px" }}>
        {router.pathname === "/category"
          ? "Категории"
          : router.pathname === "/category/[id]"
          ? "Подкатегории"
          : router.pathname === "/search"
          ? "Поиск"
          : router.pathname === "/orders"
          ? "Мои заказы"
          : router.pathname === "/basket"
          ? "Корзина"
          : router.pathname === "/profile"
          ? "Профиль"
          : router.pathname === "/application"
          ? "Заявка"
          : ""}
      </Typography>
    </Stack>
  );
};

export default TopDrawerSecondary;
