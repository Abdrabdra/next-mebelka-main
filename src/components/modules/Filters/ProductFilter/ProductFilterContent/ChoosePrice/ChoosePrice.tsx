import { MainInput } from "@components/ui/Inputs";
import {
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useTypedSelector } from "@store/index";

import { FC, useEffect, useState } from "react";

interface Props {
  handleChangeQuery: (value: any) => void;
}

const ChoosePrice: FC<Props> = ({ handleChangeQuery }) => {
  const selectedPriceFrom = useTypedSelector(
    (state) => state.productFilter.values.priceFrom
  );
  const selectedPriceTo = useTypedSelector(
    (state) => state.productFilter.values.priceTo
  );
  // const orderByPriceASC = useTypedSelector(
  //   (state) => state.filterProduct.values.orderByPriceASC
  // );
  // const orderByPriceDESC = useTypedSelector(
  //   (state) => state.filterProduct.values.orderByPriceDESC
  // );

  const [price, setPrice] = useState<any>({
    priceFrom: selectedPriceFrom,
    priceTo: selectedPriceTo,
  });

  const handleValueChange = (e: any, type: "priceFrom" | "priceTo") => {
    const { value } = e.target;

    if (type === "priceFrom") {
      setPrice((prev: object) => {
        return { ...prev, priceFrom: value };
      });
    }
    if (type === "priceTo") {
      setPrice((prev: object) => {
        return { ...prev, priceTo: value };
      });
    }
  };

  // const [priceOrder, setPriceOrder] = useState<any>({
  //   orderByPriceASC: orderByPriceASC,
  //   orderByPriceDESC: orderByPriceDESC,
  // });
  // const [select, setSelect] = useState(
  //   orderByPriceASC ? "ASC" : orderByPriceDESC ? "DESC" : ""
  // );

  // const handleOrderChange = (e: any) => {
  //   const { value } = e.target;

  //   if (value === "") {
  //     setSelect(value);
  //     setPriceOrder({ orderByPriceASC: "", orderByPriceDESC: "" });
  //   }
  //   if (value === "ASC") {
  //     setSelect(value);
  //     setPriceOrder({ orderByPriceASC: true, orderByPriceDESC: "" });
  //   }
  //   if (value === "DESC") {
  //     setSelect(value);
  //     setPriceOrder({ orderByPriceDESC: true, orderByPriceASC: "" });
  //   }
  // };

  useEffect(() => {
    handleChangeQuery({ ...price });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price]);

  // useEffect(() => {
  //   handleChangeQuery({ ...price, ...priceOrder });
  // }, [price, priceOrder]);

  return (
    <Stack>
      <Typography>Цена (KZT)</Typography>
      <Stack direction={"row"} spacing={2.5}>
        <Stack>
          <Typography>От</Typography>
          <MainInput
            value={price.priceFrom}
            onChange={(e) => handleValueChange(e, "priceFrom")}
            bordercolor="grey.200"
          />
        </Stack>
        <Stack>
          <Typography>До</Typography>
          <MainInput
            value={price.priceTo}
            onChange={(e) => handleValueChange(e, "priceTo")}
            bordercolor="grey.200"
          />
        </Stack>
        {/* <Stack sx={{ minWidth: "120px" }}>
          <Typography>Сортировка по цене</Typography>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={select}
              label="Age"
              onChange={(e) => handleOrderChange(e)}
            >
              <MenuItem value={""}>Без сортировки</MenuItem>
              <MenuItem value={"ASC"}>По возрастанию</MenuItem>
              <MenuItem value={"DESC"}>По уменьшению</MenuItem>
            </Select>
          </FormControl>
        </Stack> */}
      </Stack>
    </Stack>
  );
};

export default ChoosePrice;
