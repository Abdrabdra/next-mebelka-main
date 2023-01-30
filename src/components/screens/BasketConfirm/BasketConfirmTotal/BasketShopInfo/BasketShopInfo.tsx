import { Divider, Stack, Typography } from "@mui/material";
import { useTypedSelector } from "@store/index";
import numberWithSpaces from "@utils/numberWithSpaces";
import { useRouter } from "next/router";
import { FC } from "react";

const BasketShopInfo = () => {
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
        Информация о магазинах
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
              iSandyq
            </Typography>
          </Stack>

          <Stack spacing={1}>
            <StyledElement title="Ср. оценка" text={"4,9"} />
            <Divider />
            <StyledElement title="Номер телефона" text="+7 777 777 77 77" />
            <Divider />
            <StyledElement title="E-mail" text="mail@mail.ru" />
            <Divider />
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default BasketShopInfo;

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
