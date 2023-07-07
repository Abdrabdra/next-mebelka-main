import AbsoluteBox from "@components/ui/AbsoluteBox";
import { MainButton } from "@components/ui/Buttons";
import { MainInput } from "@components/ui/Inputs";
import { Box, Stack, Typography } from "@mui/material";
import { IRegistration } from "@src/types/auth/IRegistration";
import { AppDispatch } from "@store/index";
import { registration } from "@store/reducers/auth/auth.action";
import { useCheckSmsMutation } from "@store/rtk-api/application-rtk/applicationEndpoints";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const SendSms: React.FC<{
  regValues: { phone: string; password: string };
  handleSetSend(): void;
}> = ({ regValues, handleSetSend }) => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [checkSms, { status }] = useCheckSmsMutation();

  const handleRegistration = async () => {
    try {
      await dispatch(
        registration({
          phone: regValues.phone,
          password: regValues.password,
        } as IRegistration)
      );
      setTimeout(() => {
        router.push("/auth/login");
      }, 2000);
    } catch (e) {
        return null
    }
  };

  const formik = useFormik({
    initialValues: { code: "" },
    onSubmit: (values, formikHelpers) => {
      checkSms({
        code: Number(values.code),
        phone: regValues.phone,
      }).then((data: any) => {
        if (data?.data?.message === "error" || data?.error) {
          console.log("error SMS");
        } else {
          handleRegistration();
        }
      });
    },
  });

  const { handleChange, handleSubmit, values } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <Typography
          sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "24px" }}
        >
          На номер {regValues.phone} был отправлен код
        </Typography>

        <Stack>
          <MainInput
            label={"Код"}
            name="code"
            value={values.code}
            onChange={handleChange}
          />
        </Stack>

        <AbsoluteBox>
          <Box>
            <MainButton type="submit" onClick={() => null}>
              Подтвердить
            </MainButton>
          </Box>
        </AbsoluteBox>
      </Stack>
    </form>
  );
};

export default SendSms;
