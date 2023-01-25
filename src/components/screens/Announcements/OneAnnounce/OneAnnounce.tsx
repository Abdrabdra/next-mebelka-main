import { Container, Stack } from "@mui/material";
import AnnounceAmount from "./AnnounceAmount";
import AnnounceColors from "./AnnounceColors";
import AnnounceDescription from "./AnnounceDescription";
import AnnounceInfo from "./AnnounceInfo";
import AnnounceRecomendations from "./AnnounceRecomendations";
import AnnounceTabs from "./AnnounceTabs";

const OneAnnounce = () => {
  return (
    <Stack>
      <Stack
        sx={{ height: "350px", backgroundColor: "secondary.main" }}
      ></Stack>

      <Stack
        sx={{
          borderRadius: "20px 20px 0 0",
          backgroundColor: "common.white",
          marginTop: "-20px",
          paddingTop: "12px",
          paddingBottom: "95px",
        }}
      >
        <Container>
          <Stack spacing={1.5}>
            <AnnounceInfo />
            <AnnounceDescription />
            <AnnounceColors />
            <AnnounceAmount />
            <AnnounceTabs />
            <AnnounceRecomendations />
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
};

export default OneAnnounce;
