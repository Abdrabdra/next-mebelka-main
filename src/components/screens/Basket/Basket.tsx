import { Stack } from "@mui/material";
import { AppDispatch } from "@store/index";
import { logout } from "@store/reducers/auth/auth.action";
import { useGetCartQuery } from "@store/rtk-api/announcement-rtk/announcementEndpoints";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import BasketFixedFooter from "./BasketFixedFooter";
import BasketList from "./BasketList";

const Basket = () => {
  const { data, refetch, error } = useGetCartQuery("");

  useEffect(() => {
    refetch();
  }, []);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (error && "status" in error && error.status === 401) {
      dispatch(logout());
    }
  }, [error]);

  return (
    <Stack>
      {data && (
        <>
          <BasketList data={data} />
          <BasketFixedFooter data={data} />
        </>
      )}
    </Stack>
  );
};

export default Basket;
