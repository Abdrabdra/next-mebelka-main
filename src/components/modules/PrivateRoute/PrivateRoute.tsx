import { Stack } from "@mui/material";
import { AppDispatch, useTypedSelector } from "@store/index";
import { logout } from "@store/reducers/auth/auth.action";
import { useGetCartQuery } from "@store/rtk-api/announcement-rtk/announcementEndpoints";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AuthBox from "./AuthBox";
import BaseLoader from "./BaseLoader";

interface Props {
  children: React.ReactNode;
}

const PrivateRoute: FC<Props> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();
  const token = localStorage.getItem("access_token");
  const isAuth = useTypedSelector((state) => state.auth.isAuth);

  // const [isLogged, setIsLogged] = useState(false);

  // const { refetch, isSuccess, isError, error, status, isLoading, isFetching } =
  //   useGetCartQuery("");
  // useEffect(() => {
  //   refetch();
  // }, []);

  // const handleNeedAuth = () => {
  //   setIsLogged(false);
  //   dispatch(logout());
  // };

  // const [isNewQuery, setIsNewQuery] = useState(false);

  // useEffect(() => {
  //   if (status === "pending") {
  //     setIsNewQuery(true);
  //   }
  // }, [status]);

  // const [is401, setIs401] = useState(false);
  // useEffect(() => {
  //   if (error && "status" in error && error.status === 401) {
  //     setIs401(true);
  //   }
  // }, [error]);

  // useEffect(() => {
  //   if (isNewQuery && (status === "rejected" || status === "fulfilled")) {
  //     if (isAuth && token) {
  //       if (isError) {
  //         handleNeedAuth();
  //         setIsNewQuery(false);
  //       } else {
  //         setIsLogged(true);
  //         setIsNewQuery(false);
  //       }
  //     } else {
  //       handleNeedAuth();
  //       setIsNewQuery(false);
  //     }
  //   }
  // }, [isNewQuery, status]);

  return <>{isAuth ? children : <AuthBox />}</>;
  // return <>{isLogged ? children : isLoading ? <BaseLoader /> : <AuthBox />}</>;
};

export default PrivateRoute;
