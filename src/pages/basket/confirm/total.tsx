import PrivateRoute from "@components/modules/PrivateRoute";
import { BasketConfirmTotal } from "@components/screens/BasketConfirm";
import { MainLayout } from "@layouts/MainLayout";
import { useGetCartQuery } from "@store/rtk-api/announcement-rtk/announcementEndpoints";
import { useIsUserAuth } from "@utils/useIsUserAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";

const BasketConfirmTotalPage = () => {
  const router = useRouter();
  const { data, isError } = useGetCartQuery("");

  useEffect(() => {
    if (isError || data?.length === 0) {
      router.push("/basket");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
