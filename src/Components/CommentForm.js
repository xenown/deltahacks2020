import React from "react";
import { useForm } from "react-hook-form";
import Question from "./Question"
import './form.css';

const WorkerForm = (props) => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    values.company = props.companyName
    values.survey = "Comment"
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

      <div className="question-text">
        Comment:
       </div>
      <div className="Question">
        <textarea id="comment" className="form-control leave-a-comment"
          name="comment"
          ref={register({
              required: "You can't submit an empty comment!"
            }
          )}
        />
        <div class={errors.comment? "alert alert-danger" : ""} role="alert">
          {errors.comment && errors.comment.message}
        </div>        
      </div>

      <button className="btn btn-primary submit-form" type="submit">Submit</button>
    </form>
  );
};

export default WorkerForm