import React from "react";
import { useForm } from "react-hook-form";

const Example = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label> Name: </label>
      <input id="name" className="form-control"
        name="email"
        ref={register({
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "invalid email address"
          }
        })}
      />
      <small id="emailHelp" className="form-text text-muted">This field is optional - Enter 'anonymous' to remain anonymous'</small>
      {errors.email && errors.email.message}

      <input
        name="username"
        ref={register({
          required: 'Required',
          validate: value => value !== "admin" || "Nice try!"
        })}
      />
      {errors.username && errors.username.message}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Example