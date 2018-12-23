import React, { Component } from 'react';
import data from '../../data/projects';
import './portfolio.scss';

class Portfolio extends Component {
  buildProjects() {
    return data.map((d, i) => (
      <div key={i} className='project'>
        <div className='project-image'></div>
        <h2>{d.title}</h2>
        <h3>{d.subtitle}</h3>
      </div>
    ))
  }

  render() {
    const projects = this.buildProjects();
    return (
      <div className='portfolio'>
        <h1>Portfolio</h1>
        <div className='projects'>
          {projects}
        </div>
      </div>
    );
  }
}

export default Portfolio;
