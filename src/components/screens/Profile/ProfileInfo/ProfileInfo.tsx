import { IconButton, Stack, Typography } from "@mui/material";

import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";

const ProfileInfo = () => {
  return (
    <Stack
      direction="row"
      justifyContent={"space-between"}
      alignItems="center"
      sx={{
        backgroundColor: "secondary.main",
        borderRadius: "12px",
        padding: "12px",
      }}
    >
      <Stack spacing={2} direction="row" alignItems={"center"}>
        <Stack
          justifyContent={"center"}
          alignItems="center"
          sx={{
            width: "52px",
            height: "52px",
            backgroundColor: "common.white",
            borderRadius: "12px",
            fontSize: "24px",
            fontWeight: 600,
          }}
        >
          И
        </Stack>
        <Stack>
          <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
            Пользователь
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "grey.900" }}>
            + 7 777 777 77 77
          </Typography>
        </Stack>
      </Stack>

      <IconButton
        sx={{
          backgroundColor: "common.white",
          width: "40px",
          height: "40px",
          color: "common.black",
        }}
      >
        <DriveFileRenameOutlineRoundedIcon />
      </IconButton>
    </Stack>
  );
};

export default ProfileInfo;
