import React, { Component } from 'react';
import './jobsComponent.css';
import Jobs from '../../../../data/jobs';

class JobsComponent extends Component {
    state = { jobs: Jobs } 

    render() { 
        return (
            <div className="jobs-comp">
                {this.state.jobs.map( job => {
                    return (
                        <div className="job" key={job.id}>
                            <div className="job-header">
                                <h1><span className="blue-text">{job.title}</span> <span className="thin-text">at</span> {job.company}</h1>
                                <h2>{job.dates}</h2>
                            </div>
                            <ul>
                                {job.bullets.map( bullet => {
                                    return (
                                        <li key={bullet}>{bullet}</li>
                                    );
                                })}
                            </ul>

                        </div>
                    );
                })}
            </div>
        );
    }
}
 
export default JobsComponent;