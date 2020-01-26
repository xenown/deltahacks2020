import React from "react";
import { useForm } from "react-hook-form";
import Question from "./Question"
import './form.css';

const WorkerForm = (props) => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    values.company = props.companyName
    values.survey = "Worker's Rights"
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
        question = "1. I feel that I am being paid equitably for my service."
      />
      <Question register = {register} errors = {errors}
        questionID="q2"
        question = "2. The working conditions are safe in my workplace."
      />
      <Question register = {register} errors = {errors}
        questionID="q3"
        question = "3. Everyone is treated equally at my workplace."
      />
      <Question register = {register} errors = {errors}
        questionID="q4"
        question = "4. I believe my work hours are reasonable."
      />
      <Question register = {register} errors = {errors}
        questionID="q5"
        question = "5. My employer’s expectations of my productivity at work are reasonable."
      />
      <Question register = {register} errors = {errors}
        questionID="q6"
        question = "6. The social security net at my company is sufficient for my needs."
      />
      <Question register = {register} errors = {errors}
        questionID="q7"
        question = "7. I feel valued in my place of employment."
      />
      <Question register = {register} errors = {errors}
        questionID="q8"
        question = "8. I am treated with respect in my workplace."
      />
      <Question register = {register} errors = {errors}
        questionID="q9"
        question = "9. I feel that the amount of vacation days I receive is equitable."
      />
      <Question register = {register} errors = {errors}
        questionID="q10"
        question = "10. My employer provides me with a sufficient amount of time off."
      />
      <Question register = {register} errors = {errors}
        questionID="q11"
        question = "11. My concerns are addressed fairly and promptly at my workplace."
      />
      <Question register = {register} errors = {errors}
        questionID="q12"
        question = "12. I do NOT find my workplace to be too stressful"
      />

      <button className="btn btn-primary submit-form" type="submit">Submit</button>
    </form>
  );
};

export default WorkerForm