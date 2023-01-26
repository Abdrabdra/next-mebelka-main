import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";

const TopDrawerSecondary = () => {
  const router = useRouter();

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "64px" }}
    >
      <Typography sx={{ fontSize: "16px", letterSpacing: "1px" }}>
        {router.pathname === "/search"
          ? "Поиск"
          : router.pathname === "/orders"
          ? "Мои заказы"
          : router.pathname === "/basket"
          ? "Корзина"
          : router.pathname === "/profile"
          ? "Профиль"
          : ""}
      </Typography>
    </Stack>
  );
};

export default TopDrawerSecondary;
