import AbsoluteBox from "@components/ui/AbsoluteBox";
import { MainButton } from "@components/ui/Buttons";
import { Container, Stack } from "@mui/material";
import BasketConfirmButton from "./BasketConfirmButton";
import BasketList from "./BasketList";
import BasketShopInfo from "./BasketShopInfo";
import BasketTotalPayment from "./BasketTotalPayment";

const BasketConfirmTotal = () => {
  return (
    <Container>
      <Stack spacing={2} sx={{ position: "relative" }}>
        <BasketList />
        <BasketTotalPayment />
        <BasketShopInfo />
        <BasketConfirmButton />
      </Stack>
    </Container>
  );
};

export default BasketConfirmTotal;
