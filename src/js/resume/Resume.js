import React, { Component } from 'react';
import { jobs } from '../data';

import Job from './Job';

class Resume extends Component {
  getJobList() {
    const jobList = jobs.map((job, i) => {
      return (<Job {...job} key={i} />);
    });
    return jobList;
  }

  render() {
    const jobList = this.getJobList();

    return(
      <div className="resume-container">
        <div className="title">Experience</div>
        {jobList}
      </div>
    );
  }
}

export default Resume;
