import React from 'react';
import { Pet } from './Pet';
import { Animal } from '@frontendmasters/pet';

export const Results: React.FC<{ pets: Animal[] }> = ({ pets }) => {
  return (
    <div className='search'>
      {pets.length === 0 ? <h1>No pets found.</h1> : pets.map(({ id, ...pet }) => <Pet key={id} id={id} {...pet} />)}
    </div>
  );
};
