import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { useTypedSelector } from "@store/index";
import { useGetCategoryQuery } from "@store/rtk-api/announcement-rtk/announcementEndpoints";
import { FC, useState } from "react";
import { FormTitle } from "../../ChooseCity/ChooseCity";

interface Props {
  parentId?: string | number;
  handleChangeQuery: (value: any) => void;
}

const ChildCategory: FC<Props> = ({ parentId, handleChangeQuery }) => {
  const { data } = useGetCategoryQuery(
    { parentId: parentId },
    { skip: parentId ? false : true }
  );

  const selectedValue = useTypedSelector(
    (state) => state.productFilter.values.categoryId
  );

  const [child, setChild] = useState(String(selectedValue));
  const handleChildChange = (event: SelectChangeEvent) => {
    setChild(event.target.value as string);

    handleChangeQuery({ categoryId: event.target.value });
  };

  return (
    <Stack spacing={1} sx={{ minWidth: 120 }}>
      <FormTitle title="Подкатегория" />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Выбрать подкатегорию
        </InputLabel>
        <Select
          disabled={parentId ? false : true}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={child}
          label="Выбрать подкатегорию"
          onChange={handleChildChange}
        >
          {data?.data.map((row) => (
            <MenuItem key={row.id} value={row.id}>
              {row.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default ChildCategory;
