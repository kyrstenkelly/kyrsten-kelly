import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Contact from './views/contact/contact';
import Header from './components/header/header';
import Home from './views/home';
import Portfolio from './views/portfolio/portfolio';
import Resume from './views/resume/resume';

export default (
  <Router>
    <div className='app'>
      <Header/>
      <Route path='/' exact component={Home} />
      <Route path='/portfolio/' component={Portfolio} />
      <Route path='/resume/' component={Resume} />
      <Route path='/contact/' component={Contact} />
    </div>
  </Router>
);
