import { Icon, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";

import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import { OrderStatus } from "@src/types/Order/OrderStatus.enum";

interface Props {
  data: OrderStatus;
}

const OrderOneStatus: FC<Props> = ({ data }) => {
  const [status, setStatus] = useState<OrderStatus>(data);

  return (
    <Stack>
      <Stack spacing={2}>
        <StatusBoxes status={status} />
        <Stack
          direction="row"
          sx={{
            p: "16px",
            borderRadius: "12px",
            backgroundColor: "secondary.main",
          }}
        >
          <Typography sx={{ flex: 1, color: "grey.900", fontSize: "16px" }}>
            Статус
          </Typography>
          <Typography sx={{ flex: 1, fontWeight: 500, fontSize: "16px" }}>
            {status === OrderStatus.CREATED
              ? "Ожидает доставки"
              : status === OrderStatus.DELIVERY
              ? "В доставке"
              : status === OrderStatus.SUCCESS
              ? "Доставлено"
              : null}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OrderOneStatus;

interface StatusBoxesProps {
  status: OrderStatus;
}

const boxes = [
  {
    id: 0,
    icon: Inventory2RoundedIcon,
    status: OrderStatus.CREATED,
  },
  {
    id: 1,
    icon: LocalShippingRoundedIcon,
    status: OrderStatus.DELIVERY,
  },
  {
    id: 2,
    icon: InventoryRoundedIcon,
    status: OrderStatus.SUCCESS,
  },
];

const StatusBoxes: FC<StatusBoxesProps> = ({ status }) => {
  return (
    <Stack direction="row">
      {boxes.map((row) => (
        <Stack
          alignItems="center"
          direction="row"
          sx={{
            flex: row.id === 2 ? 0 : 1,
            whiteSpace: "nowrap",
            overflow: row.id === 2 ? "initial" : "hidden",

            "&:after": {
              content:
                row.id === 2
                  ? `""`
                  : `"--------------------------------------------------------------------------------------------------------------------------------"`,
            },
          }}
        >
          <Stack
            key={row.id}
            justifyContent={"center"}
            alignItems="center"
            sx={{
              minWidth: "72px",
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              backgroundColor:
                status === row.status ? "primary.main" : "secondary.main",
            }}
          >
            <Icon
              component={row.icon}
              sx={{
                color: status === row.status ? "common.white" : "primary.main",
              }}
            />
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};
