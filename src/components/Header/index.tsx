import { Container, Img, Logout, PhotoProfile, RightButton, RightSection } from "./style";
import authService from "../../services/authService";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Profile = () => {
  const [user, loading] = useAuthState(authService.getAuth());
  if (!user || loading) {
    return null;
  }
  return (
    <PhotoProfile />
  );
};

const LogoutButton = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(authService.getAuth());
  if (!user || loading) {
    return null;
  }
  const handleButtonClick = () => {
    signOut(authService.getAuth()).then(() => {
      navigate("/team-jo-project-4");
    });
  };
  return (
    <RightButton onClick={handleButtonClick}>
      <Logout>
        Log out
      </Logout>
    </RightButton>
  );
};

function Header() {
  return (
    <Container>
      <Img src={`${process.env.PUBLIC_URL}assets/logo.png`} />
      <RightSection>
        <Profile />
        <LogoutButton />
      </RightSection>
    </Container>
  );
}

export default Header;
