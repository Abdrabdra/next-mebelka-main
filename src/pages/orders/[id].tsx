import OrderOne from "@components/screens/Orders/OrderOne";
import { MainLayout } from "@layouts/MainLayout";

const OrderOnePage = () => {
  return (
    <MainLayout isBack={true}>
      <OrderOne />
    </MainLayout>
  );
};

export default OrderOnePage;
