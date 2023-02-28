import { Checkbox, FormControlLabel, Stack, Typography } from "@mui/material";
import { useTypedSelector } from "@store/index";
import React, { FC } from "react";

interface Props {
  handleChangeQuery: (value: any) => void;
}

const ChooseIsDiscount: FC<Props> = ({ handleChangeQuery }) => {
  const selectedValue = useTypedSelector(
    (state) => state.productFilter.values.discount
  );

  const [checked, setChecked] = React.useState(selectedValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);

    if (event.target.checked) {
      handleChangeQuery({ discount: event.target.checked });
    } else {
      handleChangeQuery({ discount: undefined });
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
        label="Со скидкой"
      />
    </Stack>
  );
};

export default ChooseIsDiscount;
