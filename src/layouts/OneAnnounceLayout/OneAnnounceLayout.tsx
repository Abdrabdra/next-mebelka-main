import { Box, Button, Container, Icon } from "@mui/material";
import { useRouter } from "next/router";
import { FC } from "react";

import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

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
            zIndex: "9999999999",
            backgroundColor: "common.white",
            minWidth: "42px",
            width: "42px",
            height: "42px",
            borderRadius: "12px",
          }}
        >
          <Icon component={ArrowBackIosRoundedIcon} />
        </Button>
      </Container>
      {children}
    </Box>
  );
};

export default OneAnnounceLayout;
