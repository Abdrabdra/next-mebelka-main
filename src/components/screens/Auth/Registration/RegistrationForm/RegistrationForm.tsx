import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { CircularProgress, Stack, Typography } from "@mui/material";

import { ActionsEnum } from "@src/types/enum";
import { AppDispatch, RootState, useTypedSelector } from "@store/index";
import { login, registration } from "@store/reducers/auth/auth.action";

import { RegistrationSchema } from "./RegistrationForm.schema";
import { MainButton } from "@components/ui/Buttons";
import { useRouter } from "next/router";
import { MainInput } from "@components/ui/Inputs";
import AbsoluteBox from "@components/ui/AbsoluteBox";
import { setAuth, setStatus } from "@store/reducers/auth/auth.slice";
import { useSendSmsMutation } from "@store/rtk-api/application-rtk/applicationEndpoints";
import SendSms from "./SendSms";

const RegistrationForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const [sendSms] = useSendSmsMutation();
  const error = useTypedSelector((state) => state.auth.error);
  const status = useTypedSelector((state) => state.auth.status);

  const formik = useFormik({
    initialValues: {
      phone: "",
      password: "",
    },
    onSubmit: async (values) => {
      sendSms({ phone: values.phone });
      setIsSend(true);
    },
    validationSchema: RegistrationSchema,
  });

  const [isSend, setIsSend] = useState(false);
  const handleSetSend = () => {
    setIsSend(false);
  };

  // form
  const { values, errors, handleChange, handleSubmit } = formik;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    router.push(`/auth/login`);
  };

  return (
    <Stack>
      {isSend ? (
        <SendSms regValues={values} handleSetSend={handleSetSend} />
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{ width: "100%", maxWidth: "375px" }}
        >
          <Stack spacing={3}>
            <Stack spacing={2}>
              <Stack>
                <Typography
                  sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "24px" }}
                >
                  Номер телефона
                </Typography>
                <MainInput
                  ref={inputRef}
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _"
                />
                {errors.phone && <Typography>{errors.phone}</Typography>}
              </Stack>
              <Stack>
                <Typography
                  sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "24px" }}
                >
                  Пароль
                </Typography>
                <MainInput
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.phone && <Typography>{errors.phone}</Typography>}
              </Stack>
            </Stack>

            <Stack spacing={1}>
              <Stack>
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "secondary.900",
                    textAlign: "center",
                  }}
                >
                  У вас уже есть аккаунт?
                </Typography>
                <Stack direction="row" spacing={1} justifyContent="center">
                  <Typography
                    onClick={handleClick}
                    sx={{
                      fontSize: "16px",
                      color: "primary.main",
                      fontWeight: 500,
                    }}
                  >
                    Войти
                  </Typography>
                </Stack>
              </Stack>

              {status !== ActionsEnum.IDLE &&
                status !== ActionsEnum.LOADING && (
                  <Stack spacing={1} justifyContent="center">
                    <Typography
                      color={
                        status === ActionsEnum.ERROR ? "error.main" : "success"
                      }
                      sx={{ textAlign: "center" }}
                    >
                      {status === ActionsEnum.ERROR
                        ? error?.message
                        : "Успешно Зарегистрировались"}
                    </Typography>
                    {status === ActionsEnum.ERROR && (
                      <Typography sx={{ textAlign: "center" }}>
                        Попробуйте еще раз
                      </Typography>
                    )}
                  </Stack>
                )}

              <AbsoluteBox>
                <MainButton
                  disabled={status === ActionsEnum.LOADING}
                  startIcon={
                    status === ActionsEnum.LOADING && (
                      <CircularProgress sx={{ color: "#FFF" }} />
                    )
                  }
                  type="submit"
                  sx={{ maxWidth: "375px" }}
                >
                  Зарегистрироваться
                </MainButton>
              </AbsoluteBox>
            </Stack>
          </Stack>
        </form>
      )}
    </Stack>
  );
};

export default RegistrationForm;
