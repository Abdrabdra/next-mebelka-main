import { Stack } from "@mui/material";
import { AppDispatch, useTypedSelector } from "@store/index";
import { logout } from "@store/reducers/auth/auth.action";
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

  useEffect(() => {
    if (isAuth && token) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
      dispatch(logout());
    }
  }, [isAuth]);

  return <>{isLogged ? children : <AuthBox />}</>;
};

export default PrivateRoute;
