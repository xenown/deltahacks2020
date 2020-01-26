import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import WorkerForm from './WorkerForm'
import './Question.css';

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        radioBoxValidator : {
            required: "This question is mandatory"
        }
    }
  }

  render() {
    return (
      <div>
        <div className="question-text">
            {this.props.question}
        </div>
        <div className="question-options">
            <input className="radio" name={this.props.questionID} type="radio" value="1" ref={this.props.register(this.state.radioBoxValidator)}/> <span className="input-text"> Strongly Disagree </span>
            <input className="radio" name={this.props.questionID} type="radio" value="2" ref={this.props.register(this.state.radioBoxValidator)}/> <span className="input-text"> Disagree </span>
            <input className="radio" name={this.props.questionID} type="radio" value="3" ref={this.props.register(this.state.radioBoxValidator)}/> <span className="input-text"> Indifferent </span>
            <input className="radio" name={this.props.questionID} type="radio" value="4" ref={this.props.register(this.state.radioBoxValidator)}/> <span className="input-text"> Agree </span>
            <input className="radio" name={this.props.questionID} type="radio" value="5" ref={this.props.register(this.state.radioBoxValidator)}/> <span className="input-text"> Strongly Agree </span>
        </div>
        <div class={this.props.errors[this.props.questionID]? "alert alert-danger" : ""} role="alert">
            {this.props.errors[this.props.questionID] && this.props.errors[this.props.questionID].message}
        </div>
      </div>
    );
  }
}

export default Question;
