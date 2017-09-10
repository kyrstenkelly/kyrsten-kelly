import React, { Component } from 'react';
import _ from 'lodash';

import { skills } from './data';
import starFilled from '../img/star-filled-icon.png';
import star from '../img/star-icon.png';

class Skills extends Component {
  getStars(rank) {
    const stars = [];

    _.times(5, (i) => {
      const starIcon = (i < rank) ? starFilled : star;
      stars.push(
        <img
          className="star"
          src={starIcon}
          alt="star"
          key={i}
        />
      )
    });

    return stars;
  }

  render() {
    const skillList = skills.map((skill, i) => {
      return (
        <div className="skill list-item--small" key={i}>
          <span className="skill--label">{skill.label}</span>
          <span className="skill--stars">{this.getStars(skill.rank)}</span>
        </div>
      );
    });

    return (
      <div className="skills-container">
        <div className="title">Skills</div>
        <div className="skills">
          {skillList}
        </div>
      </div>
    );
  }
}

export default Skills;
