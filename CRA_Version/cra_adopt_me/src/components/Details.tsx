import React, { useEffect, useState, useReducer, Dispatch } from 'react';
import pet, { Animal } from '@frontendmasters/pet';

const animalReducer = (currentState: any, newState: any) => {
  return { ...currentState, ...newState };
};

export const Details: React.FC<{ path: string; id?: string }> = ({ id = '' }) => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [, /*error*/ setError] = useState<Error>();

  const [
    {
      name,
      type: animal,
      contact: {
        address: { city, state },
      },
      description,
      /*photos: media,*/ breeds: { primary: breed },
    },
    setState,
  ]: [Animal, Dispatch<any>] = useReducer(animalReducer, {
    name: '',
    animal: '',
    description: '',
    media: [],
    contact: { address: { city: '', state: '' } },
    breeds: { primary: '' },
  });

  useEffect(() => {
    pet
      .animal(parseInt(id))
      .then(({ animal }) => {
        setState(animal);
        setLoading(false);
      })
      .catch(petErr => setError(petErr));
  }, [id]);

  return loading ? (
    <h1>
      <span role='img' aria-label='sand-glass'>
        ⌛
      </span>
      Loading...
    </h1>
  ) : (
    <div className='details'>
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
        <button>{`Adopt ${name}`}</button>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Details;
