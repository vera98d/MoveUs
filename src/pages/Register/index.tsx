import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, Form, FormField, FormFieldError, Input } from "../../components/Form/styles";

type FormFields = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string
}

const Register = () => {
  const { register, handleSubmit, watch,  formState: { errors } } = useForm<FormFields>(); 
  const onSubmit: SubmitHandler<FormFields> = (data) => console.log(data, errors)
  const onSubmitError: SubmitHandler<any> = (data) => console.log(data, errors)
  

  return (
    <div className="register">
       <Form onSubmit={handleSubmit(onSubmit, onSubmitError)}>
        
        <FormField><Input
          type="text"
          {...register("firstName", { required: true, minLength: 3, maxLength: 20 })}
          placeholder="Enter your first user name"
        />
        <FormFieldError>{errors.firstName?.type === "required" && "Please enter your first name"}
        {errors.firstName?.type === "minLength" && "Use at least 3 characters"}
        {errors.firstName?.type === "maxLength" && "You can use 20 characters at most"}</FormFieldError></FormField>
         
        <FormField><Input
          type="text"
          {...register("lastName", { required: true, minLength: 3, maxLength: 20 })}
          placeholder="Enter your last user name"
        />
        <FormFieldError>{errors.lastName?.type === "required" && "Please enter your last name"}
        {errors.lastName?.type === "minLength" && "Use at least 3 characters"}
        {errors.lastName?.type === "maxLength" && "You can use 20 characters at most"}</FormFieldError></FormField>
         
        <FormField><Input
          type="text"
          {...register("username", { required: true, minLength: 3, maxLength: 20 })}
          placeholder="Enter your user name"
        />        
        <FormFieldError>{errors.username?.type === "required" && "Please enter your user name"}
        {errors.username?.type === "minLength" && "Use at least 3 characters"}
        {errors.username?.type === "maxLength" && "You can use 20 characters at most"}</FormFieldError></FormField>

         <FormField><Input
          type="email"
          {...register("email", { required: true,  pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "invalid email address"
      } })}
          placeholder="Enter your e-mail adress"
        />
        <FormFieldError>{errors.email?.type === "required" && "Email is required"}</FormFieldError></FormField>
        
        <FormField><Input
          type="password"
          {...register("password", { required: true, minLength: 8, })}
          placeholder="Enter your password"
        />
        <FormFieldError>{errors.password?.type === "required" && "Password is required"}
        {errors.password?.type === "minLength" && "Min length is 8 characters"}</FormFieldError></FormField>

         <FormField><Input
          type="password"
           {...register("passwordConfirmation", { required: true,  validate: (val: string) => {
    if (watch("password") !== val) {
      return "Your passwords do not match";
    }
  }, })}
          placeholder="Confirm password"
        /></FormField>

        <Button>Register</Button>
        <div>
          Already have an account?{" "}
          <Link to="/login">Login</Link> now.
        </div>
      </Form>
    </div>
  );
}
export default Register;
