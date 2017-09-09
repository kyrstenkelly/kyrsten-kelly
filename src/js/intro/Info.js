import React, { Component } from 'react';

import resume from '../../assets/Kyrsten-Kelly-Resume-2017.pdf';
import chat from '../../img/chat-icon.png';
import download from '../../img/download-icon.png';
import email from '../../img/email-icon.png';
import phone from '../../img/phone-icon.png';
import facebook from '../../img/facebook-icon.png';
import linkedin from '../../img/linkedin-icon.png';
import github from '../../img/github-icon.png';

class Info extends Component {
  render() {
    return (
      <div className="personal-info">
        <span className="personal-info--section">
          <span className="title">Links:</span>
          <a className="link" href="https://www.linkedin.com/in/kyrsten-kelly-42386091/">
            <img className="icon" src={linkedin} alt="LinkedIn"/>
          </a>
          <a className="link" href="https://github.com/kyrstenkelly">
            <img className="icon" src={github} alt="GitHub"/>
          </a>
          <a className="link" href="https://www.facebook.com/kyrsten.kelly">
            <img className="icon" src={facebook} alt="Facebook"/>
          </a>
        </span>

        <span className="personal-info--section">
          <span className="title">Contact me:</span>
          <a className="link" href="tel:1-512-627-4323">
            <img className="icon" src={phone} alt="phone"/>
          </a>
          <a className="link" href="sms:1-512-627-4323">
            <img className="icon" src={chat} alt="phone"/>
          </a>
          <a className="link" href="mailto:kyrsten.kelly@gmail.com">
            <img className="icon" src={email} alt="email"/>
          </a>
        </span>

        <span className="personal-info--section">
          <span className="title">Resume:</span>
          <a className="link" href={resume} download>
            <img className="icon" src={download} alt="download"/>
          </a>
        </span>
      </div>
    );
  }
}

export default Info;
