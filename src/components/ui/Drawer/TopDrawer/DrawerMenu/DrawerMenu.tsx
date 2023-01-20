import { Box, Drawer } from "@mui/material";
import { FC, useEffect, useState } from "react";
import DrawerMenuContent from "./DrawerMenuContent";

interface Props {
  opened: boolean;
  handleOpen: (value: boolean) => void;
}

const DrawerMenu: FC<Props> = ({ opened, handleOpen }) => {
  const [state, setState] = useState(opened);

  useEffect(() => {
    setState(opened);
  }, [opened]);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
      handleOpen(open);
    };

  const changeDrawer = (value: boolean) => {
    setState(value);
    handleOpen(value);
  };

  return (
    <Drawer
      anchor={"left"}
      open={state}
      onClose={toggleDrawer(false)}
      sx={{
        zIndex: 999999,
        "& .MuiPaper-root": { borderRadius: "0 0 20px 0" },
      }}
    >
      <DrawerMenuContent changeDrawer={changeDrawer} />
    </Drawer>
  );
};

export default DrawerMenu;
