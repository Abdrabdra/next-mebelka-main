import { Box, Divider, Icon, Stack, Typography } from "@mui/material";
import { FC } from "react";
import ProductListSlider from "./ProductListSlider";

interface Props {
  productTitle?: string;
}

const ProductList: FC<Props> = ({ productTitle }) => {
  return (
    <Stack spacing={2}>
      {productTitle && (
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "18px",
            color: "primary.main",
            lingeHeight: "21.48px",
            letterSpacing: "1px",
          }}
        >
          {productTitle}
        </Typography>
      )}

      <ProductListSlider />
    </Stack>
  );
};

export default ProductList;
