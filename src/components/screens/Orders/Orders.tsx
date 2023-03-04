import {
  Container,
  Accordion,
  AccordionSummary,
  Stack,
  Typography,
  AccordionDetails,
} from "@mui/material";
import { useGetOrderQuery } from "@store/rtk-api/order-rtk/orderEndpoints";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/router";

const Orders = () => {
  const router = useRouter();
  const { data } = useGetOrderQuery("");

  const hanldeNavigate = (id: number) => {
    router.push(`/orders/${id}`);
  };

  return (
    <Container>
      <Stack spacing={2}>
        {data &&
          data.data.map((row) => (
            <Stack
              key={row.id}
              spacing={1}
              onClick={() => hanldeNavigate(row.id)}
              sx={{
                backgroundColor: "secondary.main",
                borderRadius: "12px",
                padding: "8px",
              }}
            >
              <Typography>Заказ №{row.id}</Typography>
              <Typography>
                Общая стоимость: {row.totalPrice.toFixed(2)}тг
              </Typography>
            </Stack>
          ))}
      </Stack>
    </Container>
  );
};

export default Orders;
