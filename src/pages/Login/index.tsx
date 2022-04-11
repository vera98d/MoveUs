import { SubmitHandler, useForm } from "react-hook-form";
import {
  AccountText,
  Button, Container, Form, FormField, FormFieldError, Img, Input, StyledLink, Wrapper,
} from "../../components/Form/styles";

type FormFields = {
  username: string;
  password: string;
};

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = (data) => console.log(data, errors);
  const onSubmitError: SubmitHandler<any> = (data) => console.log(data, errors);

  return (
    <Container>
      <Img src="assets/logo.png" />
      <Wrapper>
        <Form onSubmit={handleSubmit(onSubmit, onSubmitError)}>
          <FormField>
            <Input
              type="text"
              {...register("username", { required: true, minLength: 3, maxLength: 20 })}
              placeholder="Enter your user name"
            />
            <FormFieldError>
              {errors.username?.type === "required" && "Please enter your user name"}
              {errors.username?.type === "minLength" && "Use at least 3 characters"}
              {errors.username?.type === "maxLength" && "You can use 20 characters at most"}
            </FormFieldError>
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
