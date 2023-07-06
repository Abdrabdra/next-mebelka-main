import { MainButton } from "@components/ui/Buttons";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

const AuthBox = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/auth/login");
  };
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ height: "calc(100vh - 200px)" }}
    >
      <Box sx={{ width: "200px" }}>
        <Typography sx={{ textAlign: "center" }}>Нужна Авторизация</Typography>
        <MainButton onClick={handleClick}>Авторизоваться</MainButton>
      </Box>
    </Stack>
  );
};

export default AuthBox;
