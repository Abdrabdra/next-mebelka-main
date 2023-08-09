import Footer from "@layouts/MainLayout/Footer";
import SecondaryLayout from "@layouts/SecondaryLayout";
import { Container, Stack, Typography } from "@mui/material";
import React from "react";

const Requisites = () => {
  return (
    <SecondaryLayout>
      <Container>
        <Stack>
          <Typography variant="h6">Реквизиты</Typography>
          <Typography component={"div"}>
            Товарищество с ограниченной ответственностью «LOOM.KZ»
          </Typography>
          <Typography component={"div"}>БИН 230540030521</Typography>
          <Typography component={"div"}>ИИК KZ53722S000025102488 </Typography>
          <Typography component={"div"}>АО «Kaspi Bank» </Typography>
          <Typography component={"div"}>БИК CASPKZKA</Typography>
          <Typography component={"div"}>КБе 17</Typography>
          <Typography component={"div"}>
            Адрес: г. Астана, проспект Мангилик Ел, д. 27. ЖК «Тулпар Элит», НП
            35
          </Typography>
          <Typography component={"div"}>Тел: 8 747 8222904</Typography>
          <Typography component={"div"}>e-mail: loom.kz@mail.ru </Typography>
          <Typography component={"div"}>
            Директор: Нұржан Гүлмамыр Светқалиқызы
          </Typography>
        </Stack>
      </Container>
    </SecondaryLayout>
  );
};

export default Requisites;
