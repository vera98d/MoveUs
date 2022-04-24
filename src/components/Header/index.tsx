import { Container, Img, Logout, RightButton, RightSection } from "./style";
import authService from "../../services/authService";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import ProfilePicture from "../ProfilePicture";

const LogoutButton = () => {
  const navigate = useNavigate();

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
  const navigate = useNavigate();
  const [user, loading] = useAuthState(authService.getAuth());

  const handleProfilePictureClick = () => {
    navigate("/team-jo-project-4/my-exercises");
  };

  return (
    <Container>
      <Img src={`${process.env.PUBLIC_URL}/assets/logo.png`} onClick={() => navigate("/team-jo-project-4/home")} />
      {user && !loading && (
        <RightSection>
          <ProfilePicture userId={user.uid} onClick={handleProfilePictureClick} />
          <LogoutButton />
        </RightSection>
      )}
    </Container>
  );
}

export default Header;
