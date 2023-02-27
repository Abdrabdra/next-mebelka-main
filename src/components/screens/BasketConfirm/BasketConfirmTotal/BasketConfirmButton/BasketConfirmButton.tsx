import AbsoluteBox from "@components/ui/AbsoluteBox";
import { MainButton } from "@components/ui/Buttons";
import { BaseModal } from "@components/ui/Modal";
import { Icon, Stack, Typography } from "@mui/material";
import { useState } from "react";

import ModalContent from "./ModalContent";

const BasketConfirmButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    handleOpen();
  };

  return (
    <AbsoluteBox>
      <MainButton onClick={handleConfirm} sx={{ maxWidth: "350px" }}>
        Подтвердить
      </MainButton>

      <BaseModal open={open} handleClose={() => null}>
        <ModalContent />
      </BaseModal>
    </AbsoluteBox>
  );
};

export default BasketConfirmButton;
