import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

type FormFields = {
  firstName: string;
  lastName: string;
  userName: string;
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
       <form onSubmit={handleSubmit(onSubmit, onSubmitError)}>
        
        <input
          type="text"
          {...register("firstName", { required: true, minLength: 3, maxLength: 20 })}
          placeholder="Put your first user name"
        />
        {errors.firstName?.type === 'required' && "Please put your first name"}
        {errors.firstName?.type === 'minLength' && "Use at least 3 characters"}
        {errors.firstName?.type === 'maxLength' && "You can use 20 characters at most"}
         
        <input
          type="text"
          {...register('lastName', { required: true, minLength: 3, maxLength: 20 })}
          placeholder="Put your last user name"
        />
        {errors.lastName?.type === 'required' && "Please put your last name"}
        {errors.lastName?.type === 'minLength' && "Use at least 3 characters"}
        {errors.lastName?.type === 'maxLength' && "You can use 20 characters at most"}
         
        <input
          type="text"
          {...register('userName', { required: true, minLength: 3, maxLength: 20 })}
          placeholder="Put your user name"
        />        
        {errors.userName?.type === 'required' && "Please put your user name"}
        {errors.userName?.type === 'minLength' && "Use at least 3 characters"}
        {errors.userName?.type === 'maxLength' && "You can use 20 characters at most"}

        <input
          type="email"
          {...register('email', { required: true,  pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "invalid email address"
      } })}
          placeholder="Put your e-mail adress"
        />
        {errors.email?.type === 'required' && "Email is required"}
        
        <input
          type="password"
          {...register('password', { required: true, minLength: 8, })}
          placeholder="Put your password"
        />
        {errors.password?.type === 'required' && "Password is required"}
        {errors.password?.type === 'minLength' && "Min length is 8 characters"}

        <input
          type="password"
           {...register('passwordConfirmation', { required: true,  validate: (val: string) => {
    if (watch('password') != val) {
      return "Your passwords do not match";
    }
  }, })}
          placeholder="Confirm password"
        />

        <button>Register</button>
        <div>
          Already have an account?{" "}
          <Link to="/login">Login</Link> now.
        </div>
      </form>
    </div>
  );
}
export default Register;
