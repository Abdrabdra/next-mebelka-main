import { MainButton } from "@components/ui/Buttons";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";

const PaymentForm = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/basket/confirm/total");
  };

  return (
    <Stack
      spacing={2}
      sx={{
        backgroundColor: "secondary.main",
        padding: "16px",
        borderRadius: "12px",
      }}
    >
      <MainButton jc="start" bgcolor="common.white" tcolor="primary.main">
        asd
      </MainButton>

      <MainButton onClick={handleNavigate}>Продолжить</MainButton>
    </Stack>
  );
};

export default PaymentForm;
