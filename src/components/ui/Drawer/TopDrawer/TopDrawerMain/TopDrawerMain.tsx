import { useState } from "react";
import { Button, IconButton, Stack } from "@mui/material";

import NotesIcon from "@mui/icons-material/Notes";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import DrawerMenu from "./DrawerMenu";

const TopDrawerMain = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = (value: boolean) => {
    setOpen(value);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ height: "64px" }}
    >
      <Stack>
        <Button
          onClick={() => handleOpen(true)}
          variant="text"
          startIcon={<NotesIcon />}
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "16.71px",
            color: "common.black",
            width: "77px",
          }}
        >
          Меню
        </Button>
        <DrawerMenu opened={open} handleOpen={handleOpen} />
      </Stack>

      <Stack direction="row">
        <IconButton sx={{ color: "common.black", fontWeight: 400 }}>
          <FavoriteBorderIcon fontSize="small" sx={{ fontWeight: 400 }} />
        </IconButton>

        <IconButton sx={{ color: "common.black" }}>
          <NotificationsNoneOutlinedIcon fontSize="small" />
        </IconButton>

        <IconButton sx={{ color: "common.black" }}>
          <PermIdentityOutlinedIcon fontSize="small" />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default TopDrawerMain;
