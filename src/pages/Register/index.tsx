import { SubmitHandler, useForm } from "react-hook-form";
import {
  AccountText,
  Button, Container, Form, FormField, FormFieldError, Img, Input, StyledLink, Wrapper,
} from "../../components/Form/styles";

type FormFields = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string
};

function Register() {
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm<FormFields>();
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
              {...register("firstName", { required: true, minLength: 3, maxLength: 20 })}
              placeholder="Name"
            />
            <FormFieldError>
              {errors.firstName?.type === "required" && "Please enter your name"}
              {errors.firstName?.type === "minLength" && "Use at least 3 characters"}
              {errors.firstName?.type === "maxLength" && "You can use 20 characters at most"}
            </FormFieldError>
          </FormField>

          <FormField>
            <Input
              type="text"
              {...register("lastName", { required: true, minLength: 3, maxLength: 20 })}
              placeholder="Surname"
            />
            <FormFieldError>
              {errors.lastName?.type === "required" && "Please enter your surname"}
              {errors.lastName?.type === "minLength" && "Use at least 3 characters"}
              {errors.lastName?.type === "maxLength" && "You can use 20 characters at most"}
            </FormFieldError>
          </FormField>

          <FormField>
            <Input
              type="text"
              {...register("username", { required: true, minLength: 3, maxLength: 20 })}
              placeholder="Username"
            />
            <FormFieldError>
              {errors.username?.type === "required" && "Please enter your username"}
              {errors.username?.type === "minLength" && "Use at least 3 characters"}
              {errors.username?.type === "maxLength" && "You can use 20 characters at most"}
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
