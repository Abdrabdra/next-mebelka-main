import { FC, useState } from "react";
import { Container, Stack } from "@mui/material";
import { useDispatch } from "react-redux";

import ChooseMark from "./ChooseMark";
import ChooseYear from "./ChooseYear";
import ChoosePrice from "./ChoosePrice";

import ChooseIsPhoto from "./ChooseIsPhoto";
import ChooseIsDiscount from "./ChooseIsDiscount";
import ChooseCity from "./ChooseCity";
import ChooseCategory from "./ChooseCategory";
import { useRouter } from "next/router";
import AbsoluteBox from "@components/ui/AbsoluteBox";
import { MainButton } from "@components/ui/Buttons";
import { setProductFilter } from "@store/reducers/filter/productFilter/productFilter.slice";

interface Props {
  handleClose: () => void;
}

const ProductFilterContent: FC<Props> = ({ handleClose }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [filterValues, setFilterValues] = useState({
    colors: [],
  });

  const handleChangeQuery = (value: object) => {
    setFilterValues((prev) => {
      return {
        ...prev,
        ...value,
      };
    });
  };

  const handleFilterSubmit = () => {
    dispatch(setProductFilter({ page: 1, ...filterValues }));
    handleClose();
    router.push("/search");
  };

  return (
    <Stack sx={{ paddingTop: "20px" }}>
      <Container>
        <Stack spacing={2}>
          <ChooseMark
            handleChangeQuery={(value) => handleChangeQuery(value)}
            chosenValues={filterValues.colors}
          />

          <Stack>
            <ChooseIsPhoto
              handleChangeQuery={(value) => handleChangeQuery(value)}
            />
            <ChooseIsDiscount
              handleChangeQuery={(value) => handleChangeQuery(value)}
            />
          </Stack>

          {/* <ChooseYear handleChangeQuery={(value) => handleChangeQuery(value)} /> */}

          <ChoosePrice
            handleChangeQuery={(value) => handleChangeQuery(value)}
          />
          <ChooseCity handleChangeQuery={(value) => handleChangeQuery(value)} />
          <ChooseCategory
            handleChangeQuery={(value) => handleChangeQuery(value)}
          />
        </Stack>
      </Container>

      <AbsoluteBox>
        <MainButton onClick={handleFilterSubmit} bgcolor="primary.main">
          Подтвердить
        </MainButton>
      </AbsoluteBox>
    </Stack>
  );
};

export default ProductFilterContent;
