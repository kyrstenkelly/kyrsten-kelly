import React, { Component } from 'react';
import background from '../img/background.png';
import '../styles/css/app.css';

import Education from './Education';
import Intro from './intro/Intro';
import Resume from './resume/Resume';
import Skills from './Skills';

var headerStyle = {
  backgroundImage: "url(" + background + ")"
};

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header" style={ headerStyle }>
          <h1>Kyrsten Kelly</h1>
          <h2>Software Developer</h2>
        </div>
        <Intro />
        <div className="section-container">
          <div className="section section--25 section--education">
            <Education />
          </div>
          <div className="section section--50 section--resume">
            <Resume />
          </div>
          <div className="section section--25 section--skills">
            <Skills />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
