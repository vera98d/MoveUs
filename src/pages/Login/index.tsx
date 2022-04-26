import { SubmitHandler, useForm } from "react-hook-form";
import {
  AccountText,
  Button,
  Container,
  Form,
  FormField,
  FormFieldError,
  Input,
  Label,
  StyledLink,
  Wrapper,
} from "../../components/Form/styles";
import authService from "../../services/authService";
import { User } from "../../interfaces/dbData";

type FormFields = Pick<User, "email" | "password">;

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = (data) =>
    authService.logInWithEmailAndPassword(data.email, data.password);
  const onSubmitError: SubmitHandler<any> = (data) => console.log(data, errors);

  return (
    <Container>
      <Wrapper>
        <Form onSubmit={handleSubmit(onSubmit, onSubmitError)}>
          <FormField>
            <Label>Enter your email</Label>
            <Input
              id="email-input"
              data-testid="email-input"
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
            <FormFieldError>
              {errors.email?.type === "required" && "Email is required"}
            </FormFieldError>
          </FormField>
          <FormField>
            <Label>Enter your password</Label>
            <Input
              id="password-input"
              data-testid="password-input"
              type="password"
              {...register("password", { required: true, minLength: 8 })}
              placeholder="Enter your password"
            />
          </FormField>
          <Button>Login</Button>
          <AccountText>
            Not a member yet?{" "}
            <StyledLink to="/team-jo-project-4/register">
              Register now
            </StyledLink>{" "}
          </AccountText>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;
