import AbsoluteBox from "@components/ui/AbsoluteBox";
import { MainButton } from "@components/ui/Buttons";
import { MainInput } from "@components/ui/Inputs";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { setBasketOrderAddress } from "@store/reducers/basket/basket.slice";
import { useGetCityQuery } from "@store/rtk-api/announcement-rtk/announcementEndpoints";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";

const AddressForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleNavigate = () => {
    router.push("/basket/confirm/payment");
  };

  const { data } = useGetCityQuery("");

  const [cityValue, setCityValue] = useState("");

  const handleCityChange = (event: SelectChangeEvent) => {
    setCityValue(event.target.value as string);
  };

  return (
    <Formik
      initialValues={{
        address: "",
        building: "",
        apartment: "",
        phone: "",
      }}
      onSubmit={(values) => {
        dispatch(
          setBasketOrderAddress({
            cityId: cityValue,
            address: values.address,
            building: values.building,
            apartment: values.apartment,
            phone: values.phone,
          })
        );
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
              <BoldTitle title="Город" />
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Город</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={cityValue}
                    label="Город"
                    onChange={handleCityChange}
                  >
                    {data?.map((row) =>
                      row.cities.map((city) => (
                        <MenuItem key={city.id} value={city.id}>
                          {city.title}
                        </MenuItem>
                      ))
                    )}
                  </Select>
                </FormControl>
              </Box>
            </Stack>

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
                name={"building"}
                value={values.building}
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
