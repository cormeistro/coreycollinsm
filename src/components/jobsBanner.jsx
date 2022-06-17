import React, { Component } from 'react';

import jobs from '../data/jobs';

class JobHistory extends Component {
    state = { jobs } 
    render() { 
        return (
            <div className="jobs-banner" id="jobs-banner">
                <h2>Work History</h2>
                <div className="jobs">

                    {this.state.jobs.map( job => {
                        return (
                            <div className="job bg-brightened" key={job.id}>
                                <div className="job-years">
                                    <h6 className="job-year">{this.getDurationNumber(job.years)}</h6>
                                    <h6>{this.getDurationText(job.years)}</h6>
                                </div>
                                <div className="job-details">
                                    <h5 className="job-title t-gradient">{job.title}</h5>
                                    <h6 className="job-company">{job.company}</h6>
                                </div>
                                <div className="job-description">{job.description}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    getDurationNumber(num) {
        if (num >= 1) return num;
        return Math.abs(num * 12);
    }

    getDurationText(num) {
        if (num >= 1) return "YEARS";
        return "MONTHS";
    }
}
 
export default JobHistory;