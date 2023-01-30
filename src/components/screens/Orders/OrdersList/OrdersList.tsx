import { Divider, IconButton, Typography } from "@mui/material";
import { Box, Stack } from "@mui/material";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useRouter } from "next/router";

const data = [
  {
    id: 0,
    title: "Диван “Lanister”",
    status: "Ожидает доставки",
  },
  {
    id: 1,
    title: "Диван “Lanister”",
    status: "Ожидает доставки",
  },
  {
    id: 2,
    title: "Диван “Lanister”",
    status: "Ожидает доставки",
  },
];

const OrdersList = () => {
  const router = useRouter();
  const handleNavigate = (id: number) => {
    router.push(`/orders/${id}`);
  };

  return (
    <Stack spacing={2}>
      {data.map((row) => (
        <Stack
          key={row.id}
          direction={"row"}
          alignItems="center"
          spacing={2}
          sx={{
            padding: "8px",
            borderRadius: "12px",
            backgroundColor: "secondary.main",
          }}
        >
          <Box
            sx={{
              width: "108px",
              height: "108px",
              borderRadius: "12px",
              backgroundColor: "primary.main",
            }}
          />

          <Stack spacing={1.5} sx={{ flex: 1 }}>
            <Stack spacing={1}>
              <Stack
                direction={"row"}
                justifyContent="space-between"
                onClick={() => handleNavigate(row.id)}
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "primary.main",
                  }}
                >
                  Диван “Lanister”
                </Typography>
                <IconButton size="small" color="primary">
                  <ArrowForwardIosRoundedIcon fontSize="inherit" />
                </IconButton>
              </Stack>

              <Stack direction={"row"} spacing={1} alignItems="center">
                <Box
                  sx={{
                    borderRadius: "50%",
                    backgroundColor: "common.black",
                    width: "16px",
                    height: "16px",
                  }}
                />
                <Typography sx={{ fontSize: "12px", fontWeight: 500 }}>
                  Черный
                </Typography>

                <Divider orientation="vertical" variant="middle" flexItem />

                <Typography sx={{ fontSize: "12px", color: "#BABABA" }}>
                  1 кол-во
                </Typography>
              </Stack>
            </Stack>

            <Stack
              sx={{
                px: "12px",
                py: "8px",
                backgroundColor: "common.white",
                borderRadius: "8px",
                width: "170px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "12px",
                  color: "grey.900",
                }}
              >
                Статус:{" "}
                <Typography
                  sx={{ fontSize: "12px", color: "common.black" }}
                  variant={"caption"}
                >
                  Ожидает доставки
                </Typography>
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default OrdersList;
