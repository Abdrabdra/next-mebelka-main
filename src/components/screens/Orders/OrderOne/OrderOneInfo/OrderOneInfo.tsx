import { Divider } from "@mui/material";
import { Stack, Typography } from "@mui/material";
import { IOneOrderItemProduct, OrderItem } from "@src/types/Order/IOrder";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
  data: OrderItem[];
}

const OrderOneInfo: FC<Props> = ({ data }) => {
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
              {tableData(row.product, row.qty).map((row, index) => (
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
  text: string | number;
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

const tableData = (data: IOneOrderItemProduct, qty: number) => {
  const tableTitles = [
    {
      title: "Наименование",
      text: data.title,
    },
    {
      title: "Цена",
      text: data.price,
    },
    {
      title: "Скидка",
      text: `${data.discount}%`,
    },
    {
      title: "Описание",
      text: data.description,
    },
    {
      title: "Колличество",
      text: qty,
    },
  ];

  return tableTitles;
};
