import { MainInput } from "@components/ui/Inputs";
import { Box, Container, Stack, Typography } from "@mui/material";
import ApplicationForm from "./ApplicationForm";

// "title": "string",
// "street": "string",
// "phone": "string",
// "email": "string",
// "cityId": 0

const Application = () => {
  return (
    <Container>
      <Stack spacing={2}>
        <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
          Оставьте Заявку
        </Typography>

        <ApplicationForm />
      </Stack>
    </Container>
  );
};

export default Application;
