import { MainButton } from "@components/ui/Buttons";
import { Button, Container, IconButton, Stack } from "@mui/material";

import NotesIcon from "@mui/icons-material/Notes";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

const TopDrawer = () => {
  return (
    <Stack
      sx={{
        zIndex: 99999,
        top: 0,
        bottom: "auto",
        position: "fixed",
        width: "100%",
        backgroundColor: "common.white",
        borderRadius: "0px 0px 12px 12px",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.08)",
      }}
    >
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: "64px" }}
        >
          <Stack>
            <Button
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
              Menu
            </Button>
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
      </Container>
    </Stack>
  );
};

export default TopDrawer;
