import { Button, Icon, Stack, Typography } from "@mui/material";
import { FC } from "react";
import ContentCategories from "./ContentCategories";
import ContentHeader from "./ContentHeader";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

interface Props {
  changeDrawer: (value: boolean) => void;
}

const DrawerMenuContent: FC<Props> = ({ changeDrawer }) => {
  return (
    <Stack
      spacing={2}
      justifyContent="space-between"
      sx={{
        width: 330,
        backgroundColor: "common.white",
        height: "100%",
        padding: "20px 20px 14px 20px",
      }}
    >
      <Stack spacing={2.5}>
        <ContentHeader changeDrawer={changeDrawer} />

        <ContentCategories />
      </Stack>

      <Button sx={{ justifyContent: "flex-start", paddingBottom: "14px" }}>
        <Stack direction="row" spacing={1.5}>
          <Icon component={LogoutRoundedIcon} />
          <Typography
            sx={{
              fontSize: "16px",
              letterSpacing: "1px",
              color: "primary.main",
            }}
          >
            Выйти
          </Typography>
        </Stack>
      </Button>
    </Stack>
  );
};

export default DrawerMenuContent;
