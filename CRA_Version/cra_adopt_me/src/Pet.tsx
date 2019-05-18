import React from 'react';

type PetProps = {
  name: string;
  animal: string;
  breed: string;
};

export const Pet: React.FC<PetProps> = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed),
  ]);
};
