import PrivateRoute from "@components/modules/PrivateRoute";
import { BasketConfirmAddress } from "@components/screens/BasketConfirm";
import { MainLayout } from "@layouts/MainLayout";
import { useTypedSelector } from "@store/index";
import { useGetCartQuery } from "@store/rtk-api/announcement-rtk/announcementEndpoints";
import { useRouter } from "next/router";
import { useEffect } from "react";

const BasketConfirmAddressPage = () => {
  const router = useRouter();
  const { data } = useGetCartQuery("");

  useEffect(() => {
    if (data?.length === 0) {
      router.push("/basket");
    }
  }, [data]);

  return (
    <MainLayout>
      <PrivateRoute>
        <BasketConfirmAddress />
      </PrivateRoute>
    </MainLayout>
  );
};

export default BasketConfirmAddressPage;
