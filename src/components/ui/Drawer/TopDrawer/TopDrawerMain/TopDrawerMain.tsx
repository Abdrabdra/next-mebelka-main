import { useState } from "react";
import { Box, Button, IconButton, Stack } from "@mui/material";

import NotesIcon from "@mui/icons-material/Notes";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import DrawerMenu from "./DrawerMenu";
import { useRouter } from "next/router";

const TopDrawerMain = () => {
  const router = useRouter();

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
        <IconButton
          onClick={() => router.push("/profile")}
          sx={{ color: "common.black", fontWeight: 400, padding: 0 }}
        >
          <Box
            component={"img"}
            src={"/svg/favorite.svg"}
            sx={{ width: "40px" }}
          />
        </IconButton>

        <IconButton
          onClick={() => router.push("/profile")}
          sx={{ color: "common.black", padding: 0 }}
        >
          <Box
            component={"img"}
            src={"/svg/notification.svg"}
            sx={{ width: "40px" }}
          />
        </IconButton>

        <IconButton
          onClick={() => router.push("/profile")}
          sx={{ color: "common.black", padding: 0 }}
        >
          <Box
            component={"img"}
            src={"/svg/profile.svg"}
            sx={{ width: "40px" }}
          />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default TopDrawerMain;
