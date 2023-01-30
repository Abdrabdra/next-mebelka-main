import { MainButton } from "@components/ui/Buttons";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";

const PaymentForm = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/basket/confirm/total");
  };

  return (
    <Stack>
      <MainButton onClick={handleNavigate}>Продолжить</MainButton>
    </Stack>
  );
};

export default PaymentForm;
