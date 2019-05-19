import React from 'react';
import './App.css';
import { SearchParams } from './SearchParams';

export const App: React.FC = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <React.StrictMode>
        <SearchParams />
      </React.StrictMode>
    </div>
  );
};
