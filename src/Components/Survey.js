import React from 'react';
import WorkerForm from './WorkerForm'
import EnviroForm from './EnviroForm'
import './Survey.css';
import CommentForm from './CommentForm'

class Survey extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="survey-header">
                    Submit an Ethics Survey on <span className="comp-name"> {this.props.companySelected} </span>
                </div>
                <div className="survey-container">
                    <div className="card">
                        <div className="survey-type">
                            SURVEY TYPE
            </div>
                        <ul className="nav nav-tabs justify-content-center">
                            <li className="nav-pills"><a className="nav-link" data-toggle="pill" href="#workers">Worker's Rights</a></li>
                            <li className="nav-pills"><a className="nav-link" data-toggle="pill" href="#environment">Environmental Impact</a></li>
                            <li className="nav-pills"><a className="nav-link" data-toggle="pill" href="#comments">Comment</a></li>
                        </ul>
                    </div>

                    <div className="tab-content">
                        <div id="workers" className="tab-pane fade in active">
                            <h3>Worker's Rights Survey</h3>
                            <WorkerForm companyName={this.props.companySelected} />
                        </div>
                        <div id="environment" className="tab-pane fade">
                            <h3>Environmental Impact Survey</h3>
                            <EnviroForm companyName={this.props.companySelected} />
                        </div>
                        <div id="comments" className="tab-pane fade">
                            <h3>Comments</h3>
                            <p>Have any ethical concerns not convered by our other surveys? Leave a comment!</p>
                            <CommentForm companyName={this.props.companySelected} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Survey;