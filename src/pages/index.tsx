import { DEV_API } from "@api/index";
import Home from "@components/screens/Home";
import { MainLayout } from "@layouts/MainLayout";
import { AuthService } from "@service/auth/auth.service";
import { store } from "@store/index";
import { refresh } from "@store/reducers/auth/auth.action";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function HomePage() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}

// export const checkAuth = async () => {
//   try {
//     const response = await AuthService.refresh();
//     localStorage.setItem("access_token", response.data.access_token);
//     console.log("response: ", response);
//   } catch (e: any) {
//     console.log("suka: ", e.response?.data?.message);
//   }
// };
