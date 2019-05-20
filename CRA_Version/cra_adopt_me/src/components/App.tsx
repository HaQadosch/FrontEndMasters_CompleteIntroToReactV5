import React from 'react';
import { Router, Link } from '@reach/router';
import './App.css';
import { SearchParams } from './SearchParams';
import { Details } from './Details';

export const App: React.FC = () => {
  return (
    <div>
      <header>
        <Link to={'/'}>Adopt me!</Link>
      </header>
      <React.StrictMode>
        <Router>
          <SearchParams path='/' />
          <Details path='/details/:id' id='' />
        </Router>
      </React.StrictMode>
    </div>
  );
};
