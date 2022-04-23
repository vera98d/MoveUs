import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import { useAuthState } from "react-firebase-hooks/auth";
import Spinner from "./style";
import Header from "../Header";

interface Props {
  restricted?: boolean;
  children: React.ReactElement;
}

const Auth: React.FC<Props> = ({ restricted, children }: Props): JSX.Element => {
  const [user, loading] = useAuthState(authService.getAuth());
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user && !restricted) navigate("/team-jo-project-4/home");
    if (!user && restricted) navigate("/team-jo-project-4");
  }, [user, loading]);
  if (loading) {
    return (
      <Spinner>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </Spinner>
    );
  }
  return (
    <>
      <Header />
      {children}
    </>
  );
};

Auth.defaultProps = {
  restricted: false,
};

export default Auth;
