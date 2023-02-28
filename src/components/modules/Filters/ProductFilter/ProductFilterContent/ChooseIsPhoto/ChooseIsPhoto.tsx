import { Checkbox, FormControlLabel, Stack, Typography } from "@mui/material";
import { useTypedSelector } from "@store/index";
import React, { FC } from "react";

interface Props {
  handleChangeQuery: (value: any) => void;
}

const ChooseIsPhoto: FC<Props> = ({ handleChangeQuery }) => {
  const selectedValue = useTypedSelector(
    (state) => state.productFilter.values.photo
  );

  const [checked, setChecked] = React.useState(selectedValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);

    if (event.target.checked) {
      handleChangeQuery({ photo: event.target.checked });
    } else {
      handleChangeQuery({ photo: undefined });
    }
  };

  return (
    <Stack>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label="С Фото"
      />
    </Stack>
  );
};

export default ChooseIsPhoto;
