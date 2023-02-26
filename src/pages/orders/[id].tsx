import PrivateRoute from "@components/modules/PrivateRoute";
import OrderOne from "@components/screens/Orders/OrderOne";
import { MainLayout } from "@layouts/MainLayout";
import { AppDispatch, useTypedSelector } from "@store/index";
import { logout } from "@store/reducers/auth/auth.action";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const OrderOnePage = () => {
  return (
    <MainLayout isBack={true}>
      <PrivateRoute>
        <OrderOne />
      </PrivateRoute>
    </MainLayout>
  );
};

export default OrderOnePage;
