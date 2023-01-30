import { Divider, IconButton, Stack, Typography } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useRouter } from "next/router";
import { useTypedSelector } from "@store/index";
import { FC } from "react";
import numberWithSpaces from "@utils/numberWithSpaces";

const BasketTotalPayment = () => {
  const router = useRouter();
  const basketItems = useTypedSelector((state) => state.basket.items);

  const handleNavigate = (id: number) => {
    router.push(`/announce/${id}`);
  };

  return (
    <Stack
      spacing={2}
      sx={{
        backgroundColor: "secondary.main",
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      <Typography
        sx={{
          color: "common.black",
          fontSize: "16px",
          fontWeight: 600,
          letterSpacing: "1px",
        }}
      >
        Итого к оплате
      </Typography>

      {basketItems.map((row) => (
        <Stack key={row.id} spacing={1.5}>
          <Stack
            onClick={() => handleNavigate(row.id)}
            direction="row"
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
              Диван “Lanister”
            </Typography>
            <IconButton size="small" sx={{ color: "common.black" }}>
              <ArrowForwardIosRoundedIcon fontSize="inherit" />
            </IconButton>
          </Stack>

          <Stack spacing={1}>
            <StyledElement
              title="Стоимость товара"
              text={`${numberWithSpaces(450000)}KZT`}
            />
            <Divider />
            <StyledElement title="Цвет" text="Черный" />
            <Divider />
            <StyledElement title="Колличество" text="1" />
            <Divider />
            <StyledElement
              title="Доставка"
              text={`${numberWithSpaces(2160)}KZT`}
            />
            <Divider />
          </Stack>
        </Stack>
      ))}

      <Stack direction="row" spacing={2.5}>
        <Typography sx={{ color: "#494949", fontWeight: 600 }}>
          Стоимость заказа
        </Typography>
        <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
          {numberWithSpaces(902160)}KZT
        </Typography>
      </Stack>
    </Stack>
  );
};

export default BasketTotalPayment;

interface ElementProps {
  title: string;
  text: string;
}

const StyledElement: FC<ElementProps> = ({ title, text }) => {
  return (
    <Stack direction="row">
      <Typography sx={{ flex: 1, color: "grey.900", fontSize: "12px" }}>
        {title}
      </Typography>
      <Typography sx={{ flex: 1, fontSize: "12px" }}>{text}</Typography>
    </Stack>
  );
};
