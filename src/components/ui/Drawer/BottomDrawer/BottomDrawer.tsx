import { Container, Icon, IconButton, Stack, Typography } from "@mui/material";

import { useRouter } from "next/router";
import { routes } from "./links.const";

const BottomDrawer = () => {
  const router = useRouter();

  const handleClick = (value: string) => {
    router.push(value);
  };

  return router.pathname === "/" ||
    router.pathname === "/search" ||
    router.pathname === "/orders" ||
    router.pathname === "/basket" ||
    router.pathname === "/profile" ? (
    <Stack
      sx={{
        zIndex: 99999,
        width: "100%",
        backgroundColor: "common.white",
        borderRadius: "20px 20px 0 0",
        boxShadow: "0px -5px 10px rgba(0, 0, 0, 0.05)",
        position: "fixed",
        top: "auto",
        bottom: 0,
      }}
    >
      <Container>
        <Stack
          direction="row"
          justifyContent={"space-evenly"}
          alignItems="center"
          sx={{ height: "68px" }}
        >
          {routes.map((row) => (
            <Stack key={row.id}>
              <IconButton key={row.id} onClick={() => handleClick(row.route)}>
                <Icon
                  component={
                    router.pathname === row.route ? row.iconFocused : row.icon
                  }
                  sx={{
                    color:
                      router.pathname === row.route
                        ? "secondary.500"
                        : "grey.500",
                  }}
                />
              </IconButton>
              {router.pathname === row.route && (
                <Typography
                  sx={{
                    fontSize: "10px",
                    fontWeight: 500,
                    lineHeight: "11.93px",
                    textAlign: "center",
                    letterSpacing: " 0.5px",
                    color: "secondary.500",
                  }}
                >
                  {row.text}
                </Typography>
              )}
            </Stack>
          ))}
        </Stack>
      </Container>
    </Stack>
  ) : null;
};

export default BottomDrawer;
