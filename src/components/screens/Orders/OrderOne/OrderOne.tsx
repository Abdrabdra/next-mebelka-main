import { Container, Stack } from "@mui/material";

import OrderOneBox from "./OrderOneBox";
import OrderOneInfo from "./OrderOneInfo";
import OrderOneReceipt from "./OrderOneReceipt";
import OrderOneStatus from "./OrderOneStatus";

const OrderOne = () => {
  return (
    <Container>
      <Stack spacing={2}>
        <OrderOneBox />
        <OrderOneStatus />
        <OrderOneInfo />
        <OrderOneReceipt />
      </Stack>
    </Container>
  );
};

export default OrderOne;
