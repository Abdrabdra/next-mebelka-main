import React from "react";

import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { useRouter } from "next/router";
import { Button, Container, Stack } from "@mui/material";
import Footer from "@layouts/MainLayout/Footer";

const SecondaryLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <Stack
      justifyContent={"space-between"}
      sx={{ paddingTop: "80px", minHeight: "100vh" }}
    >
      <Stack
        sx={{
          zIndex: 10,
          top: 0,
          bottom: "auto",
          position: "fixed",
          width: "100%",
          backgroundColor: "common.white",
          borderRadius: "0px 0px 12px 12px",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ height: "64px" }}
          >
            <Button
              onClick={handleClick}
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                letterSpacing: "1px",
              }}
              startIcon={
                <ArrowBackIosRoundedIcon
                  sx={{ fontSize: "16px !important", color: "common.black" }}
                />
              }
            >
              Назад
            </Button>
          </Stack>
        </Container>
      </Stack>
      {children}
      <Stack sx={{ padding: "20px" }}></Stack>
      <Footer />
    </Stack>
  );
};

export default SecondaryLayout;
