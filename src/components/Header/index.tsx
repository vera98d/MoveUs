import { Container, Img, Logout, PhotoProfile, RightButton, RightSection } from "./style";
import authService from "../../services/authService";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(authService.getAuth());
  if (!user || loading) {
    return null;
  }
  return (
    <PhotoProfile onClick={() => navigate("/register")} />
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
      navigate("/login");
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
        <ProfilePage />
        <LogoutButton />
      </RightSection>
    </Container>
  );
}

export default Header;
