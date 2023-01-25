import { Stack, Typography } from "@mui/material";

const AnnounceDescription = () => {
  return (
    <Stack
      spacing={1}
      sx={{
        backgroundColor: "secondary.main",
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
        Описание товара
      </Typography>
      <Typography
        sx={{ fontSize: "14px", fontWeight: 500, color: "secondary.500" }}
      >
        Двухспальная кровать «Олимпия» - это, безусловно, выгодное приобретение
        Просторная, уютная кровать снабжена
      </Typography>
    </Stack>
  );
};

export default AnnounceDescription;
