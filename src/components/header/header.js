import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='logo'>
          <Link to='/'>Kyrsten Kelly</Link>
        </div>

        <ul className='menu'>
          <li className='menu-item'>
            <Link to='/portfolio/'>Portfolio</Link>
          </li>
          <li className='menu-item'>
            <Link to='/resume/'>Resume</Link>
          </li>
          <li className='menu-item'>
            <Link to='/contact/'>Contact</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
