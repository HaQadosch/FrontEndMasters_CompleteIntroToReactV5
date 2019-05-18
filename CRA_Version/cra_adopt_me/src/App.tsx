import React from 'react';
import './App.css';
import { Pet } from './Pet';

export const App: React.FC = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name={'Luna'} animal={'dog'} breed={'havanese'} />
      <Pet name={'Peper'} animal={'bird'} breed={'cockatiel'} />
      <Pet name={'Doink'} animal={'cat'} breed={'mixed'} />
    </div>
  );
};
