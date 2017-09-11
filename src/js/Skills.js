import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import { skills } from './data';
import collapseIcon from '../img/collapse-icon.png';
import expandIcon from '../img/expand-icon.png';
import starFilled from '../img/star-filled-icon.png';
import star from '../img/star-icon.png';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  getSkillList(listOfSkills) {
    return listOfSkills.map((skill, i) => {
      return (
        <div className="skill list-item--small" key={i}>
          <span className="skill--label">{skill.label}</span>
          <span className="skill--stars">{this.getStars(skill.rank)}</span>
        </div>
      );
    });
  }

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

  toggleExpandedList() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render() {
    const initialSkills = skills.slice(0, 12);
    const expandedSkills = skills.slice(12, skills.length);
    const initialSkillList = this.getSkillList(initialSkills);
    const visibleSkillList = this.getSkillList(expandedSkills);
    const icon = this.state.expanded ? collapseIcon : expandIcon;
    const expandedClass = this.state.expanded ? 'active' : '';

    return (
      <div className="skills-container">
        <div className="title">Skills</div>
        <div className="skills">
          <div className="skills--initial">
            {initialSkillList}
          </div>
          <div className={`skills--expanded ${expandedClass}`}>
            {visibleSkillList}
          </div>
          <div style={{ float:"left", clear: "both" }}
            ref={(el) => { this.skillsEnd = el; }}>
          </div>
        </div>
        <div className="skills-expand">
          <img
            className="icon"
            src={icon}
            onClick={() => {this.toggleExpandedList()}}
            alt="toggle list"
          />
        </div>
      </div>
    );
  }
}

export default Skills;
