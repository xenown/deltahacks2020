import React from "react";
import { useForm } from "react-hook-form";
import Question from "./Question"
import './form.css';

const WorkerForm = (props) => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    values.company = props.companyName
    values.survey = "Environmental Impact"
    console.log(values);
  };

  const radioBoxValidator = {
    required: "This question is mandatory"
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="question-text">
        Name:
        <small id="nameHelp" className="form-text text-muted name-help">This field is optional - Enter 'anonymous' to remain anonymous</small>
      </div>
      <div className="Question">
        <input id="name" className="form-control"
          name="name"
          ref={register({
              required: "Enter your name, or 'anonymous' to remain anonymous"
            }
          )}
        />
        <div class={errors.name? "alert alert-danger" : ""} role="alert">
          {errors.name && errors.name.message}
        </div>        
      </div>

      <Question register = {register} errors = {errors}
        questionID="q1"
        question = "1. Environmental concerns are considered and discussed at my workplace."
      />
      <Question register = {register} errors = {errors}
        questionID="q2"
        question = "2. In general, I believe that my workplace has a net positive impact on the climate."
      />
      <Question register = {register} errors = {errors}
        questionID="q3"
        question = "3. My workplace promotes recycling programs and initiatives."
      />
      <Question register = {register} errors = {errors}
        questionID="q4"
        question = "4. My workplace manages energy consumption effectively."
      />
      <Question register = {register} errors = {errors}
        questionID="q5"
        question = "5. My workplace manages water consumption effectively."
      />
      <Question register = {register} errors = {errors}
        questionID="q6"
        question = "6. My workplace manages materials consumption effectively."
      />
      <Question register = {register} errors = {errors}
        questionID="q7"
        question = "7. My workplace manages waste disposal effectively."
      />
      <Question register = {register} errors = {errors}
        questionID="q8"
        question = "8. My workplace actively participates in environmental protection initiatives."
      />
      <Question register = {register} errors = {errors}
        questionID="q9"
        question = "9. My workplace always considers environmental impact when making decisions."
      />
      <Question register = {register} errors = {errors}
        questionID="q10"
        question = "10. My company contributes little to environmental plastic pollution."
      />
      <Question register = {register} errors = {errors}
        questionID="q11"
        question = "11. My company contributes little to environmental carbon pollution."
      />
      <Question register = {register} errors = {errors}
        questionID="q12"
        question = "12. My company contributes little to environmental water pollution."
      />

      <button className="btn btn-primary submit-form" type="submit">Submit</button>
    </form>
  );
};

export default WorkerForm