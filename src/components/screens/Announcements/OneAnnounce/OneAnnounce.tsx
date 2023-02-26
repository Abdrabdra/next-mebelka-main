import { Container, Stack } from "@mui/material";
import Image from "next/image";
import AnnounceAmount from "./AnnounceAmount";
import AnnounceColors from "./AnnounceColors";
import AnnounceDescription from "./AnnounceDescription";
import AnnounceInfo from "./AnnounceInfo";
import AnnounceRecomendations from "./AnnounceRecomendations";
import AnnounceTabs from "./AnnounceTabs";

import AnnounceFooterBasket from "./AnnounceFooterBasket";
import AnnounceImage from "./AnnounceImage";
import { useGetOneProductQuery } from "@store/rtk-api/announcement-rtk/announcementEndpoints";
import { useRouter } from "next/router";

const OneAnnounce = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useGetOneProductQuery(String(id), {
    skip: id ? false : true,
  });

  return (
    <Stack>
      <AnnounceImage />

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
          {data && (
            <Stack spacing={1.5}>
              <AnnounceInfo
                title={data.title}
                avgRating={data.status.avg}
                discount={data.discount}
                price={data.price}
              />
              <AnnounceDescription />
              <AnnounceColors colors={data.colors} />
              <AnnounceAmount />
              <AnnounceTabs />
              <AnnounceRecomendations />
            </Stack>
          )}
        </Container>
      </Stack>

      {id && <AnnounceFooterBasket productId={Number(id)} />}
    </Stack>
  );
};

export default OneAnnounce;
