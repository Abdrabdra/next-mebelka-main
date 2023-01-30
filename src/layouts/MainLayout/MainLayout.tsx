import { FC } from "react";

import { BottomDrawer, TopDrawer } from "@components/ui/Drawer";
import { Box } from "@mui/material";

interface Props {
  isBack?: boolean;
  children: React.ReactNode;
}

const MainLayout: FC<Props> = ({ isBack, children }) => {
  return (
    <Box sx={{ paddingTop: "80px", paddingBottom: "84px" }}>
      <TopDrawer isBack={isBack ? true : false} />
      {children}
      {!isBack && <BottomDrawer />}
    </Box>
  );
};

export default MainLayout;
