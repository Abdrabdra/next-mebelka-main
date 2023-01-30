import { Container, Stack } from "@mui/material";
import OrderOneBox from "./OrderOneBox";
import OrderOneStatus from "./OrderOneStatus";

const OrderOne = () => {
  return (
    <Container>
      <Stack spacing={2}>
        <OrderOneBox />
        <OrderOneStatus />
      </Stack>
    </Container>
  );
};

export default OrderOne;
