import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./style";
import Header from "../Header";
import { UserContext } from "../../context/UserContextProvider";

interface Props {
  restricted?: boolean;
  children: React.ReactElement;
}

const Auth: React.FC<Props> = ({ restricted, children }: Props): JSX.Element => {
  const { user, isLoading } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (user && !restricted) navigate("/team-jo-project-4/home");
    if (!user && restricted) navigate("/team-jo-project-4");
  }, [user, isLoading]);

  if (isLoading) {
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
