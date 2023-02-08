import { MainButton } from "@components/ui/Buttons";
import { MainInput } from "@components/ui/Inputs";
import { Box, Stack, Typography } from "@mui/material";
import { useCreateApplicationMutation } from "@store/rtk-api/application-rtk/applicationEndpoints";
import { Formik } from "formik";

const ApplicationForm = () => {
  const [create, { isLoading, isSuccess, isError, error }] =
    useCreateApplicationMutation();

  console.log(error);

  return (
    <Formik
      initialValues={{
        title: "",
        street: "",
        phone: "",
        email: "",
        cityId: "",
      }}
      onSubmit={(values) => {
        create(values);
      }}
    >
      {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <Stack spacing={1}>
            <Box>
              <Typography>Название</Typography>
              <MainInput
                required
                name={"title"}
                value={values.title}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <Typography>Улица</Typography>
              <MainInput
                required
                name={"street"}
                value={values.street}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <Typography>Номер Телефона</Typography>
              <MainInput
                required
                name={"phone"}
                value={values.phone}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <Typography>Электронная Почта</Typography>
              <MainInput
                required
                type={"email"}
                name={"email"}
                value={values.email}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <Typography>Город</Typography>
              <MainInput
                required
                name={"cityId"}
                value={values.cityId}
                onChange={handleChange}
              />
            </Box>

            <MainButton type="submit" disabled={isLoading}>
              Отправить
            </MainButton>

            {isSuccess && (
              <Typography sx={{ color: "green" }}>
                Успешно отправлено
              </Typography>
            )}
            {isError && (
              <Typography color="error">Ошибка при отправке</Typography>
            )}
          </Stack>
        </form>
      )}
    </Formik>
  );
};

export default ApplicationForm;
