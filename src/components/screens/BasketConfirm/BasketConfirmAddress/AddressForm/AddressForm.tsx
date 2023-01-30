import { MainButton } from "@components/ui/Buttons";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";

const AddressForm = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/basket/confirm/payment");
  };

  return (
    <Stack>
      <MainButton onClick={handleNavigate}>Продолжить</MainButton>
    </Stack>
  );
};

export default AddressForm;
