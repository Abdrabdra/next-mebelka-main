import PrivateRoute from "@components/modules/PrivateRoute";
import Profile from "@components/screens/Profile";
import { MainLayout } from "@layouts/MainLayout";

const ProfilePage = () => {
  return (
    <MainLayout>
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    </MainLayout>
  );
};

export default ProfilePage;
