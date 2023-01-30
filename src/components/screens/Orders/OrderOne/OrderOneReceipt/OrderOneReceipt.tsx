import { Divider, Stack, Typography } from "@mui/material";
import numberWithSpaces from "@utils/numberWithSpaces";
import { useRouter } from "next/router";
import { FC } from "react";

const data = [
  {
    id: 0,
  },
  {
    id: 1,
  },
];

const tableTitles = [
  {
    title: "Стоимость товара",
    text: `${numberWithSpaces(450000)}KZT`,
  },
  {
    title: "Цвет",
    text: "Черный",
  },
  {
    title: "Колличество",
    text: "1",
  },
  {
    title: "Доставка",
    text: numberWithSpaces(2160),
  },
];

const OrderOneReceipt = () => {
  const router = useRouter();

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
        Чек заказа
      </Typography>

      <Stack spacing={6}>
        {data.map((row) => (
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
            </Stack>

            <Stack spacing={1}>
              {tableTitles.map((row, index) => (
                <Stack key={index}>
                  <StyledElement title={row.title} text={row.text} />
                  <Divider />
                </Stack>
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack>

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

export default OrderOneReceipt;

interface ElementProps {
  title: string;
  text?: string | number;
}

const StyledElement: FC<ElementProps> = ({ title, text }) => {
  return (
    <Stack direction="row">
      <Typography sx={{ flex: 1, color: "grey.900", fontSize: "12px" }}>
        {title}
      </Typography>
      <Typography sx={{ flex: 1, fontSize: "12px", fontWeight: 500 }}>
        {text}
      </Typography>
    </Stack>
  );
};
