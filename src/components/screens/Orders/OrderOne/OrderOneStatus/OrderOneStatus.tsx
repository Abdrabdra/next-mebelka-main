import { Icon, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";

import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";

const data: 0 | 1 | 2 = 0;

const OrderOneStatus = () => {
  const [status, setStatus] = useState(data);

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
            {status === 0
              ? "Ожидает доставки"
              : status === 1
              ? "В доставке"
              : status === 2
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
  status: number;
}

const boxes = [
  {
    id: 0,
    icon: Inventory2RoundedIcon,
  },
  {
    id: 1,
    icon: LocalShippingRoundedIcon,
  },
  {
    id: 2,
    icon: InventoryRoundedIcon,
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
                status === row.id ? "primary.main" : "secondary.main",
            }}
          >
            <Icon
              component={row.icon}
              sx={{
                color: status === row.id ? "common.white" : "primary.main",
              }}
            />
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};
