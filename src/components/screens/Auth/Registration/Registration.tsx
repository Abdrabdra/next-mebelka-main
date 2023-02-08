import { Box, Container, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import RegistrationForm from "./RegistrationForm";

const Registration = () => {
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

          <RegistrationForm />
        </Stack>
      </Container>
    </Stack>
  );
};

export default Registration;
