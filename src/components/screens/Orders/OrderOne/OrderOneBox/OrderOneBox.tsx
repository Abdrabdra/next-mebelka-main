import { Box, Divider, Stack, Typography } from "@mui/material";
import numberWithSpaces from "@utils/numberWithSpaces";
import Image from "next/image";
import { useRouter } from "next/router";

import mockPicture from "@assets/img/krovat_Olimpia.png";

const OrderOneBox = () => {
  const router = useRouter();

  const handleNavigate = (id: number) => {
    router.push(`/announce/${id}`);
  };

  return (
    <Stack
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
      >
        <Image
          src={mockPicture}
          alt="Picture of the author"
          style={{
            width: "100%",
            height: "108px",
            borderRadius: "12px",
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>

      <Stack spacing={1.5} sx={{ flex: 1 }}>
        <Stack spacing={1}>
          <Stack
            direction={"row"}
            justifyContent="space-between"
            onClick={() => handleNavigate(1)}
          >
            <Typography
              sx={{
                fontSize: "18px",
                color: "primary.main",
              }}
            >
              Диван “Lanister”
            </Typography>
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

        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 700,
            color: "primary.main",
          }}
        >
          {numberWithSpaces(450000)}тг
        </Typography>
      </Stack>
    </Stack>
  );
};

export default OrderOneBox;
