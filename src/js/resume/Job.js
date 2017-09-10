import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Job extends Component {
  static propTypes = {
    position: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="job list-item">
        <div className="job--header">
          <div className="job--header-position bold">
            {this.props.position}
          </div>
          <span className="job--header-company">
            {this.props.company}
          </span>
          <span className="job--header-date-range date-range">
            {this.props.startDate} &ndash; {this.props.endDate}
          </span>
        </div>
        <div className="job--description">
          {this.props.description}
        </div>
      </div>
    );
  }
}

export default Job;
