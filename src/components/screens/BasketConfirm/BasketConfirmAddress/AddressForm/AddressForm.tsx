import AbsoluteBox from "@components/ui/AbsoluteBox";
import { MainButton } from "@components/ui/Buttons";
import { MainInput } from "@components/ui/Inputs";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { FC } from "react";

const AddressForm = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/basket/confirm/payment");
  };

  return (
    <Formik
      initialValues={{ address: "", house: "", apartment: "", phone: "" }}
      onSubmit={(values) => {
        handleNavigate();
      }}
    >
      {({ values, handleChange }) => (
        <Form>
          <Stack
            spacing={2}
            sx={{
              backgroundColor: "secondary.main",
              padding: "16px",
              borderRadius: "12px",
            }}
          >
            <Stack spacing={1}>
              <BoldTitle title="Адрес" />
              <MainInput
                required
                name={"address"}
                value={values.address}
                onChange={handleChange}
                bgcolor="common.white"
                label={"Напишите ваш адрес"}
              />
            </Stack>

            <Stack spacing={1}>
              <BoldTitle title="Дом" />
              <MainInput
                required
                name={"house"}
                value={values.house}
                onChange={handleChange}
                bgcolor="common.white"
                label={"Номер вашего дома"}
              />
            </Stack>

            <Stack spacing={1}>
              <BoldTitle title="Квартиры" />
              <MainInput
                required
                name={"apartment"}
                value={values.apartment}
                onChange={handleChange}
                bgcolor="common.white"
                label={"Номер вашей квартиры/дома"}
              />
            </Stack>

            <Stack spacing={1}>
              <BoldTitle title="Телефон" />
              <MainInput
                required
                name={"phone"}
                value={values.phone}
                onChange={handleChange}
                bgcolor="common.white"
                placeholder="+7 ( _ _ _ ) _ _ _ - _ _ - _ _ "
              />
            </Stack>

            <AbsoluteBox>
              <MainButton type="submit">Продолжить</MainButton>
            </AbsoluteBox>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default AddressForm;

interface BoldTitleProps {
  title: string;
}

const BoldTitle: FC<BoldTitleProps> = ({ title }) => {
  return <Typography sx={{ fontWeight: 500 }}>{title}</Typography>;
};
