import {
  Box,
  Button,
  Icon,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { useRouter } from "next/router";

interface Props {
  changeDrawer: (value: boolean) => void;
}

const ContentHeader: FC<Props> = ({ changeDrawer }) => {
  const router = useRouter();

  const handleClose = () => {
    changeDrawer(false);
  };

  const handleNavigate = () => {
    router.push("/search");
    handleClose();
  };

  return (
    <Stack spacing={5}>
      <Stack direction="row" justifyContent={"space-between"}>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Box
            sx={{
              minWidth: "40px",
              width: "40px",
              height: 40,
              backgroundColor: "secondary.main",
              borderRadius: "50%",
            }}
          />
          <Typography
            sx={{
              fontSize: "16px",
              letterSpacing: "1px",
              color: "primary.main",
            }}
          >
            Loom
          </Typography>
        </Stack>

        <IconButton onClick={handleClose}>
          <CloseIcon sx={{ color: "common.black" }} />
        </IconButton>
      </Stack>

      <Stack>
        <Button
          onClick={handleNavigate}
          sx={{
            backgroundColor: "secondary.main",
            borderRadius: "12px",
            padding: "8px",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <Stack
            alignContent={"center"}
            justifyContent="center"
            sx={{
              backgroundColor: "common.white",
              borderRadius: "8px",
              width: "40px",
              height: "40px",
            }}
          >
            <Icon component={SearchIcon} sx={{ alignSelf: "center" }} />
          </Stack>

          <Typography
            sx={{
              flex: 1,
              textAlign: "start",
              fontSize: "14px",
              fontWeight: 500,
              color: "primary.main",
            }}
          >
            Поиск
          </Typography>

          <Stack
            alignContent={"center"}
            justifyContent="center"
            sx={{
              backgroundColor: "common.white",
              borderRadius: "8px",
              width: "40px",
              height: "40px",
            }}
          >
            <Icon
              fontSize="medium"
              component={KeyboardArrowRightRoundedIcon}
              sx={{ alignSelf: "center" }}
            />
          </Stack>
        </Button>
      </Stack>
    </Stack>
  );
};

export default ContentHeader;
