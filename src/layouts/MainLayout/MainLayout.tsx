import { FC } from "react";

import { BottomDrawer, TopDrawer } from "@components/ui/Drawer";
import { Box } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Box sx={{ paddingTop: "80px", paddingBottom: "84px" }}>
      <TopDrawer />
      {children}
      <BottomDrawer />
    </Box>
  );
};

export default MainLayout;
