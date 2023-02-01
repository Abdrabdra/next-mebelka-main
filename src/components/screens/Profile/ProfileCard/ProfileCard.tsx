import { Button, Stack, Typography } from "@mui/material";

const ProfileCard = () => {
  return (
    <Stack
      spacing={1.5}
      sx={{
        backgroundColor: "secondary.main",
        borderRadius: "12px",
        padding: "12px",
      }}
    >
      <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
        Банковская карта
      </Typography>

      <Button
        sx={{
          backgroundColor: "common.white",
          borderRadius: "12px",
          padding: "16px",
        }}
      >
        <Stack
          direction="row"
          justifyContent={"space-between"}
          sx={{ flex: 1 }}
        >
          <Typography>Visa **** 1414</Typography>
          {/* <ArrowForwardIosRoundedIcon
            fontSize="small"
            sx={{ color: "common.black" }}
          /> */}
        </Stack>
      </Button>
    </Stack>
  );
};

export default ProfileCard;
