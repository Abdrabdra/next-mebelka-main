import { Container, Stack } from "@mui/material";
import ProfileAddress from "./ProfileAddress";
import ProfileCard from "./ProfileCard";
import ProfileFavorite from "./ProfileFavorite";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
  return (
    <Container>
      <Stack spacing={1.5}>
        <ProfileInfo />
        <ProfileFavorite />
        <ProfileAddress />
        <ProfileCard />
      </Stack>
    </Container>
  );
};

export default Profile;
