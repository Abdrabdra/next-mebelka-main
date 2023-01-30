import { Container, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { FC } from "react";
import TopDrawerBack from "./TopDrawerBack";
import TopDrawerMain from "./TopDrawerMain";
import TopDrawerSecondary from "./TopDrawerSecondary";

interface Props {
  isBack: boolean;
}

const TopDrawer: FC<Props> = ({ isBack }) => {
  const router = useRouter();

  return (
    <Stack
      sx={{
        zIndex: 1000,
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
        {isBack ? (
          <TopDrawerBack />
        ) : router.pathname === "/" ? (
          <TopDrawerMain />
        ) : (
          <TopDrawerSecondary />
        )}
      </Container>
    </Stack>
  );
};

export default TopDrawer;
