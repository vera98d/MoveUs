import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

type FormFields = {
    userName: string;
    password: string;
}

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>();
    const onSubmit: SubmitHandler<FormFields> = (data) => console.log(data, errors)
    const onSubmitError: SubmitHandler<any> = (data) => console.log(data, errors)

    return (
        <div className="login">
            <form onSubmit={handleSubmit(onSubmit, onSubmitError)}>
               <input
          type="text"
          {...register('userName', { required: true, minLength: 3, maxLength: 20 })}
          placeholder="Put your user name"
        />        
        {errors.userName?.type === 'required' && "Please put your user name"}
        {errors.userName?.type === 'minLength' && "Use at least 3 characters"}
        {errors.userName?.type === 'maxLength' && "You can use 20 characters at most"}
   
                <input
          type="password"
          {...register('password', { required: true, minLength: 8, })}
          placeholder="Put your password"
                />
                <button>Login</button>
                <div>
          Don't have an account?{" "}
          <Link to="/register">Register</Link> now.
        </div>
            </form>
        </div>
    )
}

export default Login;