import { Container, Stack } from "@mui/material";
import { useRouter } from "next/router";
import TopDrawerMain from "./TopDrawerMain";
import TopDrawerSecondary from "./TopDrawerSecondary";

const TopDrawer = () => {
  const router = useRouter();

  return (
    <Stack
      sx={{
        zIndex: 99999,
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
        {router.pathname === "/" ? <TopDrawerMain /> : <TopDrawerSecondary />}
      </Container>
    </Stack>
  );
};

export default TopDrawer;
