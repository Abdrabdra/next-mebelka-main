import { Divider } from "@mui/material";
import { Stack, Typography } from "@mui/material";
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
    title: "Наименование",
    text: `"Кровать "Олимпия" (2-х спальная) с подъёмным механизмом в уплотненном гобелене"`,
  },
  {
    title: "Производство",
    text: "Производство ZETA",
  },
  {
    title: "Длина (mm)",
    text: "2150",
  },
  {
    title: "Ширина (mm)",
    text: "2150",
  },
  {
    title: "Высота (mm)",
    text: "1850",
  },
  {
    title: "Каркас",
    text: "Дерево, фанера, ДСП",
  },
  {
    title: "Декор",
    text: "Окантовка",
  },
  {
    title: "Подъемный механизм",
    text: "Да",
  },
  {
    title: "Ящики для белья",
    text: "Да",
  },
  {
    title: "Цвет",
    text: "Черный",
  },
  {
    title: "Колличество",
    text: "2",
  },
];

const OrderOneInfo = () => {
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
        Информация о заказе
      </Typography>

      <Stack spacing={6}>
        {data.map((row) => (
          <Stack key={row.id} spacing={1.5}>
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
    </Stack>
  );
};

export default OrderOneInfo;

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
      <Typography sx={{ flex: 1, fontSize: "12px", fontWeight: 500 }}>
        {text}
      </Typography>
    </Stack>
  );
};
