import { IconButton } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import { FC } from "react";
import { ButtonProps } from "@mui/material/Button";
import { IconButtonProps } from "@mui/material/IconButton";

const FilterButton: FC<IconButtonProps> = (props) => {
  return (
    <IconButton
      {...props}
      sx={{
        backgroundColor: "secondary.main",
        borderRadius: "12px",
        height: "60px",
        width: "60px",
      }}
    >
      <TuneIcon fontSize="medium" />
    </IconButton>
  );
};

export default FilterButton;
