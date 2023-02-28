import AbsoluteBox from "@components/ui/AbsoluteBox";
import { MainButton } from "@components/ui/Buttons";
import { Container, Stack } from "@mui/material";
import { useTypedSelector } from "@store/index";
import { useGetCartQuery } from "@store/rtk-api/announcement-rtk/announcementEndpoints";
import BasketConfirmButton from "./BasketConfirmButton";
import BasketList from "./BasketList";
import BasketShopInfo from "./BasketShopInfo";
import BasketTotalPayment from "./BasketTotalPayment";

const BasketConfirmTotal = () => {
  const { data } = useGetCartQuery("");

  const sda = useTypedSelector((state) => state.basket.orderAddress);

  console.log("ORDER ADDRESS: ", sda);

  return (
    <Container>
      {data && (
        <Stack spacing={2} sx={{ position: "relative" }}>
          <BasketList data={data} />
          <BasketTotalPayment data={data} />
          {/* <BasketShopInfo /> */}
          <BasketConfirmButton />
        </Stack>
      )}
    </Container>
  );
};

export default BasketConfirmTotal;
