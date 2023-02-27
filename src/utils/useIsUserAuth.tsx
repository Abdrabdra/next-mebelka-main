import { AppDispatch, useTypedSelector } from "@store/index";
import { useDispatch } from "react-redux";

export function useIsUserAuth() {
  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  const token = localStorage.getItem("access_token");

  if (isAuth && token) {
    return true;
  } else {
    return false;
  }
}
