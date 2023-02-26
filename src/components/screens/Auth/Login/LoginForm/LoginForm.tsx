import { useFormik } from "formik";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { CircularProgress, Stack, Typography } from "@mui/material";

import { ActionsEnum } from "@src/types/enum";
import { AppDispatch, RootState, useTypedSelector } from "@store/index";
import { login } from "@store/reducers/auth/auth.action";

import { LoginSchema } from "./LoginForm.schema";
import { MainButton } from "@components/ui/Buttons";
import { useRouter } from "next/router";
import { MainInput } from "@components/ui/Inputs";
import AbsoluteBox from "@components/ui/AbsoluteBox";
import { setAuth } from "@store/reducers/auth/auth.slice";

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { status } = useTypedSelector((state: RootState) => state.auth);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      phone: "",
      password: "",
    },
    onSubmit: async (values) => {
      dispatch(login(values));
    },
    validationSchema: LoginSchema,
  });

  const { values, errors, handleChange, handleSubmit } = formik;
  const { phone, password } = values;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const handleClick = () => {
    router.push(`/auth/registration`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "375px" }}>
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
              value={phone}
              onChange={handleChange}
              placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _"
            />
            {errors.phone && <Typography>{errors.phone}</Typography>}
          </Stack>
          <Stack>
            <Typography
              sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "24px" }}
            >
              Ваш пароль
            </Typography>
            <MainInput
              id="my-input"
              aria-describedby="my-helper-text"
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              placeholder="Введите пароль"
            />
            {errors.password && (
              <Typography sx={{ color: "error.main" }}>
                {errors.password}
              </Typography>
            )}
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
              У вас еще нет аккаунта?
            </Typography>
            <Stack direction="row" spacing={1} justifyContent="center">
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "secondary.900",
                  textAlign: "center",
                }}
              >
                Можете
              </Typography>
              <Typography
                onClick={handleClick}
                sx={{
                  fontSize: "16px",
                  color: "primary.main",
                  fontWeight: 500,
                }}
              >
                зарегистрироваться
              </Typography>
            </Stack>
          </Stack>

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
              Войти
            </MainButton>
          </AbsoluteBox>
        </Stack>
      </Stack>
    </form>
  );
};

export default LoginForm;
