import { SubmitHandler, useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  AccountText,
  Button, Container, Form, FormField, FormFieldError, Img, Input, StyledLink, Wrapper,
} from "../../components/Form/styles";
import authService from "../../services/authService";

type FormFields = {
    email: string;
    password: string;
}

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = (data) => authService.logInWithEmailAndPassword(data.email, data.password);
  const [user] = useAuthState(authService.getAuth());
  console.log(user) //TODO remove later when protected routes implemented
  const onSubmitError: SubmitHandler<any> = (data) => console.log(data, errors);

  return (
    <Container>
      <Img src="assets/logo.png" />
      <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit, onSubmitError)}>
        <FormField>
          <Input
              type="email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            placeholder="Email"
          />
          <FormFieldError>{errors.email?.type === "required" && "Email is required"}</FormFieldError>
        </FormField>

        <Input
          type="password"
          {...register("password", { required: true, minLength: 8 })}
          placeholder="Enter your password"
        />
        <Button>Login</Button>
        <AccountText>
          Not a member yet?
          {" "}
          <StyledLink to="/register">Register now</StyledLink>
          {" "}
          now.
        </AccountText>
        </Form>
        </Wrapper>
    </Container>
  );
}

export default Login;
