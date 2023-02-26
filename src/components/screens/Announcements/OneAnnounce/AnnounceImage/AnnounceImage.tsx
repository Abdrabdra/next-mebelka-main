import { Stack } from "@mui/material";
import Image from "next/image";

import mockPicture from "@assets/img/krovat_Olimpia.png";

const AnnounceImage = () => {
  return (
    <Stack sx={{ height: "350px", backgroundColor: "secondary.main" }}>
      <Image
        src={mockPicture}
        style={{
          width: "100%",
          height: "350px",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          objectPosition: "center",
        }}
        alt={"Product"}
      />
    </Stack>
  );
};

export default AnnounceImage;
