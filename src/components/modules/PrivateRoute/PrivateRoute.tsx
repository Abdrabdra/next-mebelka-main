import { Stack } from "@mui/material";
import { AppDispatch, useTypedSelector } from "@store/index";
import { logout } from "@store/reducers/auth/auth.action";
import { useGetCartQuery } from "@store/rtk-api/announcement-rtk/announcementEndpoints";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AuthBox from "./AuthBox";

interface Props {
  children: React.ReactNode;
}

const PrivateRoute: FC<Props> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();
  const token = localStorage.getItem("access_token");
  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  const [isLogged, setIsLogged] = useState(false);

  const { refetch, error, isSuccess, isError } = useGetCartQuery("");
  useEffect(() => {
    refetch();
  }, []);

  const handleNeedAuth = () => {
    setIsLogged(false);
    dispatch(logout());
  };

  useEffect(() => {
    console.log("asd");
    if (isAuth && token) {
      if (error) {
        console.log("setLOG FALSE");

        handleNeedAuth();
      } else {
        console.log("setLOG TRUE");
        setIsLogged(true);
      }
    } else {
      handleNeedAuth();
    }
  }, [isSuccess, isError]);

  console.log("isLogged: ", isLogged);

  return <>{isLogged ? children : <AuthBox />}</>;
};

export default PrivateRoute;
