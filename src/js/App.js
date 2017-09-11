import React, { Component } from 'react';
import background from '../img/background.png';
import '../styles/css/app.css';

import About from './intro/About';
import Education from './Education';
import Info from './intro/Info';
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
          <div className="header--title">
            <div className="header--title-main">Kyrsten Kelly</div>
            <div className="header--title-secondary">Software Developer</div>
          </div>
        </div>
        <div className="section-container columns">
          <div className="rows row-1">
            <div className="section section--50 section--about">
              <About />
            </div>
            <div className="section section--50 section--info">
              <Info />
            </div>
          </div>
          <div className="rows row-2">
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
      </div>
    );
  }
}

export default App;
