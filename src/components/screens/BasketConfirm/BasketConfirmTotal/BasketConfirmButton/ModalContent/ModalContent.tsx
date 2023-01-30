import { Icon, Typography } from "@mui/material";
import { Stack } from "@mui/material";

import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { MainButton } from "@components/ui/Buttons";
import { useRouter } from "next/router";

const ModalContent = () => {
  const router = useRouter();

  const handleNavigateToMain = () => {
    router.push("/");
  };

  const handleNavigateToOrders = () => {
    router.push("/orders");
  };

  return (
    <Stack
      spacing={3}
      sx={{
        backgroundColor: "secondary.main",
        padding: "24px",
        borderRadius: "10px",
      }}
    >
      <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
        О товаре
      </Typography>

      <Stack spacing={3} alignItems="center">
        <Stack
          justifyContent={"center"}
          alignItems="center"
          sx={{
            width: "120px",
            height: "120px",
            backgroundColor: "common.white",
            borderRadius: "50%",
          }}
        >
          <Icon sx={{ fontSize: "60px" }} component={ThumbUpOffAltIcon} />
        </Stack>

        <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
          Товар подтвержден
        </Typography>

        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            textAlign: "center",
            color: "secondary.900",
          }}
        >
          <Typography
            variant="caption"
            sx={{ fontSize: "16px", color: "secondary.200", fontWeight: 500 }}
          >
            Спасибо
          </Typography>
          , что купили товар в нашем приложении iSandyq. Ваши товары находятся в
          разделе Заказы
        </Typography>
      </Stack>

      <Stack direction="row" spacing={2}>
        <MainButton
          onClick={handleNavigateToMain}
          fsize="14px"
          bgcolor="secondary.main"
          sx={{ textTransform: "initial", width: "155px", color: "grey.800" }}
        >
          На главное
        </MainButton>
        <MainButton
          onClick={handleNavigateToOrders}
          fsize="14px"
          sx={{ textTransform: "initial", width: "155px" }}
        >
          Перейти в Заказы
        </MainButton>
      </Stack>
    </Stack>
  );
};

export default ModalContent;
