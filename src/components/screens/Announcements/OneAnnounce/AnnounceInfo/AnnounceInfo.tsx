import { alpha, Divider, Icon, Stack, Typography } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import { INFO } from "@utils/theme/palette";

const AnnounceInfo = () => {
  return (
    <Stack
      spacing={1.5}
      sx={{
        backgroundColor: "secondary.main",
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      <Typography
        sx={{ fontSize: "20px", fontWeight: 600, letterSpacing: "1px" }}
      >
        Кровать “Olimpia”
      </Typography>

      <Stack direction="row" alignItems={"center"} spacing={1}>
        <Icon component={StarRateIcon} />
        <Typography
          sx={{ fontSize: "16px", fontWeight: 500, letterSpacing: "1px" }}
        >
          4.7
        </Typography>

        <Divider variant="middle" orientation="vertical" flexItem />

        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 500,
            letterSpacing: "1px",
            color: "error.main",
          }}
        >
          -70%
        </Typography>

        <Divider variant="middle" orientation="vertical" flexItem />

        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 500,
            letterSpacing: "1px",
            color: "grey.700",
          }}
        >
          520 продано
        </Typography>
      </Stack>

      <Stack direction="row" spacing={0.5}>
        <Typography
          sx={{ fontWeight: 700, fontSize: "24px", letterSpacing: "1px" }}
        >
          450 000тг
        </Typography>
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
          1 100 000тг
        </Typography>
      </Stack>
    </Stack>
  );
};

export default AnnounceInfo;
