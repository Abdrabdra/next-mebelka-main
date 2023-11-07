import { Box, Button, Container, Icon, Paper } from "@mui/material";
import { useRouter } from "next/router";
import { FC } from "react";

import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import Footer from "@layouts/MainLayout/Footer";

interface Props {
  children: React.ReactNode;
}

const OneAnnounceLayout: FC<Props> = ({ children }) => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <Box>
      <Container>
        <Button
          onClick={handleClick}
          sx={{
            top: "12px",
            position: "fixed",
            zIndex: "1290",
            backgroundColor: "common.white",
            minWidth: "42px",
            width: "42px",
            height: "42px",
            borderRadius: "12px",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
          }}
        >
          <Icon component={ArrowBackIosRoundedIcon} />
        </Button>
      </Container>
      {children}
      <Footer forOnePage />
    </Box>
  );
};

export default OneAnnounceLayout;
