import React, { Component } from 'react';

class Education extends Component {
  render() {
    return(
      <div className="education-container">
        <div className="title">Education</div>

        <div className="education">
          <div className="list-item">
            <div className="bold education--title">
              B.S. in Mathematics
            </div>
            <div>University of Texas at Austin</div>
            <div className="date-range">2009-2013</div>
          </div>

          <div className="list-item">
            <div className="bold education--title">
              Elements of Computing Certificate
            </div>
            <div>University of Texas at Austin</div>
            <div className="date-range">2011-2013</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
