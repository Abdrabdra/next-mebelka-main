import * as React from "react";
import { useDispatch } from "react-redux";
import {
  Slide,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Icon,
  Input,
  Stack,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

import CloseIcon from "@mui/icons-material/Close";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

import { ProductFilterContent } from "../ProductFilterContent";
import { setProductFilterReset } from "@store/reducers/filter/productFilter/productFilter.slice";
import { useTypedSelector } from "@store/index";
import { MainButton } from "@components/ui/Buttons";
import { FC } from "react";
import FilterButton from "./FilterButton";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
  withIcon?: boolean;
}

const ProductFilterButton: FC<Props> = ({ withIcon }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFilterReset = () => {
    dispatch(setProductFilterReset());
    setOpen(false);
  };

  const val = useTypedSelector((state) => state.productFilter.values);

  return (
    <>
      <Input placeholder="Поиск" disableUnderline sx={{ flex: 1 }} />
      {withIcon ? (
        <FilterButton onClick={handleClickOpen} />
      ) : (
        <Button
          variant="contained"
          onClick={handleClickOpen}
          sx={{
            minWidth: "50px",
            width: "220px",
            // width: "50px",
            height: "50px",
            borderRadius: "12px",
            color: "#000",
            backgroundColor: "primary.light",
          }}
        >
          Фильтры
        </Button>
      )}

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{ zIndex: "100" }}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Фильтры Продуктов
            </Typography>
            <Stack>
              <MainButton onClick={handleFilterReset} bgcolor="transparent">
                Сбросить
              </MainButton>
            </Stack>
          </Toolbar>
        </AppBar>

        <ProductFilterContent handleClose={handleClose} />
      </Dialog>
    </>
  );
};

export default ProductFilterButton;
