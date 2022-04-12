import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  AccountText,
  Button, Container, Form, FormField, FormFieldError, Img, Input, StyledLink, Wrapper,
} from "../../components/Form/styles";
import authService from "../../services/authService";

type FormFields = {
  name: string;
  surname: string;
  login: string;
  email: string;
  password: string;
  passwordConfirmation: string
};

function Register() {
  const navigate = useNavigate();
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await authService
      .registerWithEmailAndPassword(data.name, data.surname, data.login, data.email, data.password);
    navigate({ pathname: "/login" });
  };
  const onSubmitError: SubmitHandler<any> = (data) => console.log(data, errors);

  return (
    <Container>
      <Img src="assets/logo.png" />
      <Wrapper>
        <Form onSubmit={handleSubmit(onSubmit, onSubmitError)}>
          <FormField>
            <Input
              type="text"
              {...register("name", { required: true, minLength: 3, maxLength: 20 })}
              placeholder="Name"
            />
            <FormFieldError>
              {errors.name?.type === "required" && "Please enter your name"}
              {errors.name?.type === "minLength" && "Use at least 3 characters"}
              {errors.name?.type === "maxLength" && "You can use 20 characters at most"}
            </FormFieldError>
          </FormField>
          <FormField>
            <Input
              type="text"
              {...register("surname", { required: true, minLength: 3, maxLength: 20 })}
              placeholder="Surname"
            />
            <FormFieldError>
              {errors.surname?.type === "required" && "Please enter your surname"}
              {errors.surname?.type === "minLength" && "Use at least 3 characters"}
              {errors.surname?.type === "maxLength" && "You can use 20 characters at most"}
            </FormFieldError>
          </FormField>
          <FormField>
            <Input
              type="text"
              {...register("login", { required: true, minLength: 3, maxLength: 20 })}
              placeholder="Login"
            />
            <FormFieldError>
              {errors.login?.type === "required" && "Please enter your username"}
              {errors.login?.type === "minLength" && "Use at least 3 characters"}
              {errors.login?.type === "maxLength" && "You can use 20 characters at most"}
            </FormFieldError>
          </FormField>
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
          <FormField>
            <Input
              type="password"
              {...register("password", { required: true, minLength: 8 })}
              placeholder="Password"
            />
            <FormFieldError>
              {errors.password?.type === "required" && "Password is required"}
              {errors.password?.type === "minLength" && "Min length is 8 characters"}
            </FormFieldError>
          </FormField>
          <FormField>
            <Input
              type="password"
              {...register("passwordConfirmation", {
                required: true,
                validate: (val: string) => {
                  if (watch("password") !== val) {
                    return "Your passwords do not match";
                  }
                },
              })}
              placeholder="Confirm password"
            />
          </FormField>
          <Button>Register</Button>
          <AccountText>
            Already have an account?
            {" "}
            <StyledLink to="/login">Login</StyledLink>
            {" "}
            now.
          </AccountText>
        </Form>
      </Wrapper>
    </Container>
  );
}
export default Register;
