import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Form from './Form'
import './Survey.css';

class Survey extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      company: "The Coca Cola Company"
    }
  }

  render() {
    return (
      <div>
        <div className="survey-header">
          Submit an Ethics Survey on {this.state.company}
        </div>
        <div className="survey-type">
          Survey Type
        </div>
        <div className="survey-container">
          <ul className="nav nav-tabs justify-content-center">
            <li className="nav-pills"><a className="nav-link" data-toggle="pill" href="#workers">Worker's Rights</a></li>
            <li className="nav-pills"><a className="nav-link" data-toggle="pill" href="#environment">Environmental Impact</a></li>
            <li className="nav-pills"><a className="nav-link" data-toggle="pill" href="#comments">Other Survey?</a></li>
          </ul>

          <div className="tab-content">
            <div id="workers" className="tab-pane fade in active">
              <h3>Worker's Rights Survey</h3>
              <p>Questions here</p>
              <Form />
            </div>
            <div id="environment" className="tab-pane fade">
              <h3>Environmental Impact Survey</h3>
              <p>Questions here</p>
            </div>
            <div id="comments" className="tab-pane fade">
              <h3>Comments</h3>
              <p>Comments here</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Survey;
