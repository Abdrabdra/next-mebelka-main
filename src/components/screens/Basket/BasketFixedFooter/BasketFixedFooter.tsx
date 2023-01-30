import { MainButton } from "@components/ui/Buttons";
import { Container, Stack, Typography } from "@mui/material";
import { useTypedSelector } from "@store/index";
import numberWithSpaces from "@utils/numberWithSpaces";
import { useRouter } from "next/router";

const BasketFixedFooter = () => {
  const router = useRouter();
  const basketItems = useTypedSelector((state) => state.basket.items);

  const handleNavigate = () => {
    router.push("/basket/confirm/address");
  };

  return basketItems.length === 0 ? null : (
    <Stack
      sx={{
        width: "100%",
        height: "150px",
        position: "fixed",
        bottom: 0,
        borderRadius: "20px 20px 0 0",
        zIndex: 99998,
        backgroundColor: "common.white",
        boxShadow: "0px -5px 10px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Container>
        <Stack
          spacing={2.5}
          direction="row"
          sx={{ paddingTop: "16px", paddingBottom: "16px" }}
        >
          <Stack sx={{ flex: 1.2 }}>
            <Typography sx={{ color: "secondary.800" }}>
              Общая стоимость заказа
            </Typography>
            <Typography sx={{ fontWeight: 700, fontSize: "22px" }}>
              {numberWithSpaces(902160)}KZT
            </Typography>
          </Stack>
          <MainButton
            onClick={handleNavigate}
            bgcolor="secondary.300"
            fsize="14px"
            sx={{ flex: 0.8 }}
          >
            Оформить
          </MainButton>
        </Stack>
      </Container>
    </Stack>
  );
};

export default BasketFixedFooter;
