import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { useTypedSelector } from "@store/index";
import { setProductFilterHelper } from "@store/reducers/filter/productFilter/productFilter.slice";
import { useGetCategoryQuery } from "@store/rtk-api/announcement-rtk/announcementEndpoints";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { FormTitle } from "../ChooseCity/ChooseCity";
import ChildCategory from "./ChildCategory";

interface Props {
  handleChangeQuery: (value: any) => void;
}

const ChooseCategory: FC<Props> = ({ handleChangeQuery }) => {
  const dispatch = useDispatch();
  const { data } = useGetCategoryQuery("");

  const selectedValue = useTypedSelector(
    (state) => state.productFilter.helper.parentCategoryId
  );

  const [parent, setParent] = useState(selectedValue);
  const handleParentChange = (event: any) => {
    setParent(event.target.value as number);

    dispatch(setProductFilterHelper({ parentCategoryId: event.target.value }));
  };

  return (
    <Stack spacing={2.5}>
      <Stack spacing={1} sx={{ minWidth: 120 }}>
        <FormTitle title="Категория" />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Выбрать категорию
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={parent}
            label="Выбрать категорию"
            onChange={handleParentChange}
          >
            {data?.data.map((row) => (
              <MenuItem value={row.id} key={row.id}>
                {row.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>

      <ChildCategory parentId={parent} handleChangeQuery={handleChangeQuery} />
    </Stack>
  );
};

export default ChooseCategory;
