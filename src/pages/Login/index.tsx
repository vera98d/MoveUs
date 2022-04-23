import { SubmitHandler, useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  AccountText,
  Button, Container, Form, FormField, FormFieldError, Img, Input, Label, StyledLink, Wrapper,
} from "../../components/Form/styles";
import authService from "../../services/authService";
import { User } from "../../interfaces/dbData";

type FormFields = Pick<User, "email" | "password">;

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = (data) => authService
    .logInWithEmailAndPassword(data.email, data.password);
  const [user] = useAuthState(authService.getAuth());
  console.log(user); // TODO remove later when protected routes implemented
  const onSubmitError: SubmitHandler<any> = (data) => console.log(data, errors);

  return (
    <Container>
      <Wrapper>
        <Form onSubmit={handleSubmit(onSubmit, onSubmitError)}>
          <FormField>
            <Label>Enter your email</Label>
            <Input
              type="email"
              autoComplete="email"
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
          <FormField>
            <Label>Enter your password</Label>
            <Input
              type="password"
              {...register("password", { required: true, minLength: 8 })}
              placeholder="Enter your password"
            />
          </FormField>
          <Button>Login</Button>
          <AccountText>
            Not a member yet?
            {" "}
            <StyledLink to="/team-jo-project-4/register">Register</StyledLink>
            {" "}
            now
          </AccountText>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;
