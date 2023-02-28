import { FC, useState } from "react";
import { Stack, Typography } from "@mui/material";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MarkList from "./MarkList";
import { MainButton } from "@components/ui/Buttons";
import { BaseModal } from "@components/ui/Modal";

interface Props {
  handleChangeQuery: (value: any) => void;
  chosenValues: number[];
}

const ChooseMark: FC<Props> = ({ handleChangeQuery, chosenValues }) => {
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => {
    setOpen(true);
  };
  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <Stack>
      <Typography>Выбор цветов</Typography>

      <Stack>
        <MainButton
          onClick={handleModalOpen}
          bgcolor="grey.200"
          jc="space-between"
          endIcon={<KeyboardArrowRightIcon />}
          sx={{
            color: "primary.main",

            "&:focus, &:hover": {
              color: "common.white",
            },
          }}
        >
          Выберите цвет
        </MainButton>

        <BaseModal open={open} handleClose={handleModalClose}>
          <MarkList
            handleChangeQuery={(value) => handleChangeQuery(value)}
            chosenValues={chosenValues}
          />
        </BaseModal>
      </Stack>
    </Stack>
  );
};

export default ChooseMark;
