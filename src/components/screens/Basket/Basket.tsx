import { Stack } from "@mui/material";
import BasketFixedFooter from "./BasketFixedFooter";
import BasketList from "./BasketList";

const Basket = () => {
  return (
    <Stack>
      <BasketList />
      <BasketFixedFooter />
    </Stack>
  );
};

export default Basket;
