
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, Form, FormField, FormFieldError, Input } from "../../components/Form/styles";


type FormFields = {
    username: string;
    password: string;
}

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>();
    const onSubmit: SubmitHandler<FormFields> = (data) => console.log(data, errors)
    const onSubmitError: SubmitHandler<any> = (data) => console.log(data, errors)

    return (
        <div className="login">
            <Form onSubmit={handleSubmit(onSubmit, onSubmitError)}>
               <FormField><Input
          type="text"
          {...register("username", { required: true, minLength: 3, maxLength: 20 })}
          placeholder="Enter your user name"
        />        
        <FormFieldError>{errors.username?.type === "required" && "Please enter your user name"}
        {errors.username?.type === "minLength" && "Use at least 3 characters"}
        {errors.username?.type === "maxLength" && "You can use 20 characters at most"}</FormFieldError></FormField>
   
                <Input
          type="password"
          {...register("password", { required: true, minLength: 8, })}
          placeholder="Enter your password"
                />
                <Button>Login</Button>
                <div>
          Don"t have an account?{" "}
          <Link to="/register">Register</Link> now.
        </div>
            </Form>
        </div>
    )
}

export default Login;