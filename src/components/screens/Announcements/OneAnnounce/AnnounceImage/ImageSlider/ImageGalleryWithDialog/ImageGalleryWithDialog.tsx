import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";

import CloseIcon from "@mui/icons-material/Close";
import OneImage from "./OneImage";

import { IImages } from "@src/types/Announcements/IOneAnnouncement";
import "keen-slider/keen-slider.min.css";

interface Props {
  open: boolean;
  handleClose: () => void;
  data: IImages[];
}

const ImageGalleryWithDialog: React.FC<Props> = ({
  open,
  handleClose,
  data,
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [ref, ins] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 1,
      spacing: 5,
      origin: "center",
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    if (ins.current) {
      ins.current.update();
    }
  }, [open]);

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      sx={{
        "& .MuiPaper-root": {
          maxWidth: "none",
          boxShadow: "none",
          bgcolor: "transparent",
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            backgroundColor: "secondary.main",
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon fontSize={"large"} color="primary" sx={{}} />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Stack
          className={"navigation-wrapper"}
          sx={{ position: "relative", width: "100%", maxHeight: "100vh" }}
        >
          <Stack
            direction="row"
            ref={ref}
            className="keen-slider"
            p={2}
            sx={{ maxWidth: "max-content" }}
          >
            {data.map((row) => (
              <Box className="keen-slider__slide" key={row.id}>
                <OneImage data={row} key={row.id} />
              </Box>
            ))}
          </Stack>
          {loaded && ins.current && (
            <Stack
              direction="row"
              justifyContent={"space-between"}
              sx={{
                position: "absolute",
                width: "100%",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <Arrow
                left
                onClick={(e: any) => e.stopPropagation() || ins.current?.prev()}
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e: any) => e.stopPropagation() || ins.current?.next()}
                disabled={
                  currentSlide === ins.current.track.details.slides.length - 1
                }
              />
            </Stack>
          )}
        </Stack>
        {loaded && ins.current && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* @ts-ignore */}
            {[...Array(ins.current.track.details.slides.length).keys()].map(
              (idx) => {
                return (
                  <Button
                    key={idx}
                    onClick={() => {
                      ins.current?.moveToIdx(idx);
                    }}
                    className={currentSlide === idx ? " active" : ""}
                    sx={{
                      minWidth: "auto",
                      border: "none",
                      width: "25px",
                      height: "25px",
                      background: currentSlide === idx ? "#000" : "#c5c5c5",
                      borderRadius: "100%",
                      margin: "0 5px",
                      padding: "5px",
                      cursor: "pointer",

                      "&:focus": {
                        outline: "none",
                      },
                    }}
                  ></Button>
                );
              }
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ImageGalleryWithDialog;

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{
        width: "50px",
        fill: disabeld ? "rgba(255, 255, 255, 0.5)" : undefined,
        cursor: disabeld ? "auto" : "pointer",
      }}
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
