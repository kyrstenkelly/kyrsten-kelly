import React, { Component } from 'react';

import About from './About';
import Info from './Info';

class Intro extends Component {
  render() {
    return (
      <div className="intro section-container">
        <div className="section intro--section intro--section-about">
          <About />
        </div>
        <div className="section intro--section intro--section-info">
          <Info />
        </div>
      </div>
    );
  }
}

export default Intro;
