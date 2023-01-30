import { Stack, Typography } from "@mui/material";

import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import { FC, useState } from "react";

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

const StatusBoxes: FC<StatusBoxesProps> = ({ status }) => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack
        justifyContent={"center"}
        alignItems="center"
        sx={{
          width: "72px",
          height: "72px",
          borderRadius: "50%",
          backgroundColor: status === 0 ? "primary.main" : "secondary.main",
        }}
      >
        <Inventory2RoundedIcon
          sx={{ color: status === 0 ? "common.white" : "primary.main" }}
        />
      </Stack>

      <Stack
        justifyContent={"center"}
        alignItems="center"
        sx={{
          width: "72px",
          height: "72px",
          borderRadius: "50%",
          backgroundColor: status === 1 ? "primary.main" : "secondary.main",
        }}
      >
        <Inventory2RoundedIcon
          sx={{ color: status === 1 ? "common.white" : "primary.main" }}
        />
      </Stack>

      <Stack
        justifyContent={"center"}
        alignItems="center"
        sx={{
          width: "72px",
          height: "72px",
          borderRadius: "50%",
          backgroundColor: status === 2 ? "primary.main" : "secondary.main",
        }}
      >
        <Inventory2RoundedIcon
          sx={{ color: status === 2 ? "common.white" : "primary.main" }}
        />
      </Stack>
    </Stack>
  );
};
