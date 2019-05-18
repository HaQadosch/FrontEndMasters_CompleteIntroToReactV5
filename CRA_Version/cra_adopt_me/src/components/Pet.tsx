import React from 'react';

type PetProps = {
  name: string;
  animal: string;
  breed: string;
};

export const Pet: React.FC<PetProps> = ({ name, animal, breed }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
};
