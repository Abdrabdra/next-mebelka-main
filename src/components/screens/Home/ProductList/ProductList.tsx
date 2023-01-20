import { Box, Divider, Icon, Stack, Typography } from "@mui/material";
import { FC } from "react";

import StarIcon from "@mui/icons-material/Star";
import { alpha } from "@mui/material/styles";
import { INFO } from "@utils/theme/palette";

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

      <Stack>
        <Stack
          spacing={1.5}
          sx={{
            width: "194px",
            backgroundColor: "secondary.main",
            borderRadius: "20px",
            padding: "12px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#000",
              borderRadius: "12px",
              height: "116px",
              width: "100%",
            }}
          />

          <Stack spacing={1}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                color: "primary.main",
                lineHeight: "18.24px",
                letterSpacing: "1px",
              }}
            >
              Диван “Lanister”
            </Typography>

            <Stack spacing={1} direction="row" alignItems={"center"}>
              <Icon component={StarIcon} sx={{ fontSize: "18px" }} />
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "1px",
                  color: "primary.main",
                }}
              >
                4.7
              </Typography>

              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{ backgroundColor: "secondary.700" }}
              />

              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "1px",
                  color: "error.main",
                }}
              >
                -70%
              </Typography>
            </Stack>

            <Stack direction="row" spacing={0.65}>
              <Typography
                sx={{ fontSize: "16px", fontWeight: 700, letterSpacing: "1px" }}
              >
                450 000тг
              </Typography>
              <Typography
                sx={{
                  alignSelf: "flex-end",
                  color: "info.400",
                  fontWeight: 300,
                  fontSize: "8px",
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
                1 100 000тг
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductList;
