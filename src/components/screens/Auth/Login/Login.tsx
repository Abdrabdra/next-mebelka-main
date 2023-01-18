import { Box, Container, Stack, Typography } from "@mui/material";

const Login = () => {
  return (
    <Stack>
      <Container>
        <Stack
          alignItems={"center"}
          justifyContent="center"
          sx={{ height: "100vh" }}
        >
          <Box component="img" alt="iSandyq" src={"/svg/iSandyq.svg"} />
          <Typography>Добро пожаловать в iSandyq</Typography>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Login;
