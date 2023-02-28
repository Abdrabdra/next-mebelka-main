import { MainButton } from "@components/ui/Buttons";
import { Container, Stack, Typography } from "@mui/material";
import { IGetCart } from "@src/types/Cart/ICart";
import { useTypedSelector } from "@store/index";
import numberWithSpaces from "@utils/numberWithSpaces";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
  data: IGetCart[];
}

const BasketFixedFooter: FC<Props> = ({ data }) => {
  const router = useRouter();

  const finalPrice = data
    .reduce((acc, row) => acc + row.totalPrice, 0)
    .toFixed(2);

  const handleNavigate = () => {
    router.push("/basket/confirm/address");
  };

  return data.length === 0 ? null : (
    <Stack
      sx={{
        width: "100%",
        height: "150px",
        position: "fixed",
        bottom: 0,
        borderRadius: "20px 20px 0 0",
        zIndex: 9,
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
              {numberWithSpaces(Number(finalPrice))}KZT
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
