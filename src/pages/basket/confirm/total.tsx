import PrivateRoute from "@components/modules/PrivateRoute";
import { BasketConfirmTotal } from "@components/screens/BasketConfirm";
import { MainLayout } from "@layouts/MainLayout";
import { useGetCartQuery } from "@store/rtk-api/announcement-rtk/announcementEndpoints";
import { useRouter } from "next/router";
import { useEffect } from "react";

const BasketConfirmTotalPage = () => {
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
        <BasketConfirmTotal />
      </PrivateRoute>
    </MainLayout>
  );
};

export default BasketConfirmTotalPage;
