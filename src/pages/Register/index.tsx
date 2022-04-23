import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  AccountText,
  Button, Container, Form, FormField, FormFieldError, Img, Input, Label, StyledLink, Wrapper,
} from "../../components/Form/styles";
import { User } from "../../interfaces/dbData";
import authService from "../../services/authService";

type FormFields = Pick<User, "name" | "surname" | "login" | "email" | "password"> & { passwordConfirmation: string };

function Register() {
  const navigate = useNavigate();
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await authService
      .registerWithEmailAndPassword(data.name, data.surname, data.login, data.email, data.password);
    navigate({ pathname: "/team-jo-project-4" });
  };
  const onSubmitError: SubmitHandler<any> = (data) => console.log(data, errors);

  return (
    <Container>
      <Wrapper>
        <Form onSubmit={handleSubmit(onSubmit, onSubmitError)}>
          <FormField>
            <Label>Enter your name</Label>
            <Input
              type="text"
              autoComplete="name"
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
            <Label>Eneter your surname</Label>
            <Input
              type="text"
              autoComplete="family-name"
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
            <Label>Eneter your username</Label>
            <Input
              type="text"
              autoComplete="username"
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
            <Label>Eneter your email</Label>
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
            <Label>Eneter your password</Label>
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
            <Label>Confirm your password</Label>
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
            <StyledLink to="/team-jo-project-4">Login</StyledLink>
            {" "}
            now.
          </AccountText>
        </Form>
      </Wrapper>
    </Container>
  );
}
export default Register;
