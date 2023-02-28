import { Container, Stack } from "@mui/material";
import { IOneOrderResponse } from "@src/types/Order/IOrder";
import { useGetOneOrderQuery } from "@store/rtk-api/order-rtk/orderEndpoints";
import { useRouter } from "next/router";
import { FC } from "react";

import OrderOneBox from "./OrderOneBox";
import OrderOneInfo from "./OrderOneInfo";
import OrderOneReceipt from "./OrderOneReceipt";
import OrderOneStatus from "./OrderOneStatus";

const OrderOne = () => {
  const router = useRouter();

  const { id } = router.query;

  const { data } = useGetOneOrderQuery(id && id);

  return (
    <Container>
      <Stack spacing={2}>
        {data && (
          <OrderOneBox
            data={data.marketOrders.map((row) => row.items.map((item) => item))}
          />
        )}

        {data?.marketOrders.map((row) => (
          <>
            <OrderOneStatus data={row.status} />
            <OrderOneInfo data={row.items} />
            <OrderOneReceipt data={row} />
          </>
        ))}
      </Stack>
    </Container>
  );
};

export default OrderOne;
