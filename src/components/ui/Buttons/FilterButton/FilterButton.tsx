import { IconButton } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";

const FilterButton = () => {
  return (
    <IconButton
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
