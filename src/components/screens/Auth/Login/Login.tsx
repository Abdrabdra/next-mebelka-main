import { Box, Container, Stack, Typography } from "@mui/material";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <Stack>
      <Container>
        <Stack
          alignItems={"center"}
          justifyContent="center"
          sx={{ height: "100vh" }}
        >
          <Box
            component="img"
            alt="iSandyq"
            src={"/svg/iSandyq.svg"}
            sx={{ mb: "62px" }}
          />
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "23.87px",
              mb: "40px",
            }}
          >
            Добро пожаловать в <b>iSandyq</b>
          </Typography>

          <LoginForm />
        </Stack>
      </Container>
    </Stack>
  );
};

export default Login;
