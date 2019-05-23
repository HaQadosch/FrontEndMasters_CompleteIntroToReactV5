import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import './App.css';
import { SearchParams } from './SearchParams';
import { Details } from './Details';
import { ThemeContext } from './ThemeContext';

export const App: React.FC = () => {
  const [color, setColor] = useState<string>('darkblue');

  return (
    <ThemeContext.Provider value={[color, setColor]}>
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
    </ThemeContext.Provider>
  );
};
