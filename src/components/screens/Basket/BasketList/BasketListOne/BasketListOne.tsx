import { alpha, Box, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import mockPicture from "@assets/img/krovat_Olimpia.png";
import numberWithSpaces from "@utils/numberWithSpaces";
import { IGetCart } from "@src/types/Cart/ICart";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { deleteBasketItem } from "@store/reducers/basket/basket.slice";
import {
  useDeleteCartMutation,
  useMinceCartMutation,
  usePlusCartMutation,
} from "@store/rtk-api/announcement-rtk/announcementEndpoints";
import { INFO } from "@utils/theme/palette";
import { $image_api } from "@api/index";

interface Props {
  data: IGetCart;
}

const BasketListOne: FC<Props> = ({ data }) => {
  const router = useRouter();

  const discountPrice = (
    data.product.discount &&
    (data.product.price * (100 - data.product.discount)) / 100
  ).toFixed(2);

  // QTY
  const [qty, setQty] = useState(data.qty);
  useEffect(() => {
    setQty(data.qty);
  }, [data.qty]);

  // MINCE
  const [mince] = useMinceCartMutation();
  const handleDecrement = () => {
    if (qty === 1) {
      return;
    }

    mince(data.id);
  };

  // PLUS
  const [plus] = usePlusCartMutation();
  const handleIncrement = () => {
    plus(data.id);
  };

  // DELETE CART
  const [deleteCart] = useDeleteCartMutation();
  const handleDelete = (id: number) => {
    deleteCart(id);
  };

  const handleClick = (id: number) => {
    router.push(`/announce/${id}`);
  };

  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems="center"
      sx={{
        height: "124px",
        backgroundColor: "secondary.main",
        padding: "8px",
        borderRadius: "12px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          borderRadius: "12px",
          width: "108px",
          height: "108px",
        }}
      >
        <Image
          // loader={() => `${$image_api}/${data?.product?.images[0]?.imageUrl}`}
          // src={`${$image_api}/${data?.product?.images[0]?.imageUrl}`}
          src={mockPicture}
          alt="Picture of the author"
          style={{
            width: "100%",
            height: "108px",
            borderRadius: "12px",
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>

      <Stack spacing={1.5} sx={{ flex: 1 }}>
        <Stack spacing={1}>
          <Stack direction="row" justifyContent={"space-between"}>
            <Typography
              onClick={() => handleClick(data.id)}
              sx={{
                fontSize: "18px",
                letterSpacing: "1px",
                color: "primary.main",
                cursor: "pointer",
              }}
            >
              {data.product.title}
            </Typography>

            <IconButton size="small" onClick={() => handleDelete(data.id)}>
              <DeleteOutlinedIcon fontSize="small" />
            </IconButton>
          </Stack>

          <Stack spacing={1} direction="row">
            <Box
              sx={{
                width: 19,
                height: 19,
                borderRadius: "50%",
                backgroundColor: "common.black",
              }}
            />
            <Typography
              sx={{
                fontWeight: 500,
                color: "primary.main",
                letterSpacing: "1px",
              }}
            >
              цвет
            </Typography>
          </Stack>
        </Stack>

        <Stack
          direction="row"
          justifyContent={"space-between"}
          sx={{ flex: 1 }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              backgroundColor: "common.white",
              borderRadius: "12px",
              height: "31px",
              width: "110px",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            <IconButton onClick={handleDecrement} disabled={qty === 1}>
              <ArrowBackIosNewRoundedIcon fontSize="small" />
            </IconButton>
            {qty}
            <IconButton onClick={handleIncrement}>
              <ArrowForwardIosRoundedIcon fontSize="small" />
            </IconButton>
          </Stack>

          <Stack direction="row" spacing={1}>
            <Typography
              sx={{
                alignSelf: "end",
                fontWeight: 700,
                fontSize: "16px",
                letterSpacing: "1px",
                color: "primary.main",
              }}
            >
              {data.product.discount ? discountPrice : data.product.price}тг
            </Typography>
            {data.product.discount && (
              <Typography
                sx={{
                  alignSelf: "flex-end",
                  color: "info.400",
                  fontWeight: 300,
                  fontSize: "14px",
                  letterSpacing: "1px",
                  position: "relative",

                  "&:after": {
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "1px",
                    backgroundColor: alpha(INFO[400], 0.7),
                    opacity: 0.8,
                    top: 0,
                    bottom: 0,
                    left: 0,
                    marginTop: "auto",
                    marginBottom: "auto",
                  },
                }}
              >
                {data.product.price}тг
              </Typography>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BasketListOne;
