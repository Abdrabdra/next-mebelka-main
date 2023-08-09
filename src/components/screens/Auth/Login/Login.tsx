import Footer from "@layouts/MainLayout/Footer";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useTypedSelector } from "@store/index";
import { useRouter } from "next/router";
import { useEffect } from "react";
import LoginForm from "./LoginForm";

const Login = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (isAuth) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  return (
    <Stack>
      <Container>
        <Stack
          alignItems={"center"}
          justifyContent="center"
          sx={{ height: "100vh" }}
        >
          {/* <Box
            component="img"
            alt="Loom"
            src={"/svg/iSandyq.svg"}
            sx={{ mb: "62px" }}
          /> */}
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "23.87px",
              mb: "40px",
            }}
          >
            Добро пожаловать в <b>Loom</b>
          </Typography>

          <LoginForm />
        </Stack>
      </Container>
      <Footer />
    </Stack>
  );
};

export default Login;
