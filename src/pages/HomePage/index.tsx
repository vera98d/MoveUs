import { useAuthState } from "react-firebase-hooks/auth";
import Home from "../../components/Home";
import authService from "../../services/authService";
import { Container, Wrapper } from "./style";

function HomePage() {
  const [user, loading] = useAuthState(authService.getAuth());
  if (loading || !user) {
    return null;
  }

  return (
    <Container>
      <Wrapper>
        <Home />
      </Wrapper>
    </Container>
  );
}

export default HomePage;
