import PrivateRoute from "@components/modules/PrivateRoute";
import Orders from "@components/screens/Orders";
import { MainLayout } from "@layouts/MainLayout";
import { useTypedSelector } from "@store/index";
import { useEffect, useState } from "react";

const OrdersPage = () => {
  return (
    <MainLayout>
      <PrivateRoute>
        <Orders />
      </PrivateRoute>
    </MainLayout>
  );
};

export default OrdersPage;
