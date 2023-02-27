import PrivateRoute from "@components/modules/PrivateRoute";
import Basket from "@components/screens/Basket";
import { MainLayout } from "@layouts/MainLayout";

const BasketPage = () => {
  return (
    <MainLayout>
      <PrivateRoute>
        <Basket />
      </PrivateRoute>
    </MainLayout>
  );
};

export default BasketPage;
