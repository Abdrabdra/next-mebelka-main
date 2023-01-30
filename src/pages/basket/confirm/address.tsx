import { BasketConfirmAddress } from "@components/screens/BasketConfirm";
import { MainLayout } from "@layouts/MainLayout";
import { useTypedSelector } from "@store/index";
import { useRouter } from "next/router";
import { useEffect } from "react";

const BasketConfirmAddressPage = () => {
  const router = useRouter();
  const basketItems = useTypedSelector((state) => state.basket.items);

  useEffect(() => {
    if (basketItems.length === 0) {
      router.push("/basket");
    }
  }, [basketItems]);

  return (
    <MainLayout>
      <BasketConfirmAddress />
    </MainLayout>
  );
};

export default BasketConfirmAddressPage;
