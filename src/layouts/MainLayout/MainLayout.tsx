import { FC } from "react";

import { BottomDrawer, TopDrawer } from "@components/ui/Drawer";
import { Box, Stack } from "@mui/material";
import Footer from "./Footer";

interface Props {
  isBack?: boolean;
  children: React.ReactNode;
  withFooter?: boolean;
}

const MainLayout: FC<Props> = ({ isBack, children, withFooter }) => {
  return (
    <Stack justifyContent="space-between"
      sx={{
        paddingTop: "80px",
        paddingBottom: withFooter ? null : "84px",
        minHeight: "100vh",
      }}
    >
      <TopDrawer isBack={isBack ? true : false} />
      {children}
      {withFooter && <Footer />}
      {!isBack && <BottomDrawer />}
    </Stack>
  );
};

export default MainLayout;
