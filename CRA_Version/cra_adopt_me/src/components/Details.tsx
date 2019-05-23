import React, { useEffect, useState, useReducer, Dispatch, useContext } from 'react';
import pet, { Animal, Address, Breeds } from '@frontendmasters/pet';
import { Caroussel } from './Caroussel';
import { ThemeContext } from './ThemeContext';

type DetailsAnimal = Pick<Animal, 'name' | 'type' | 'description' | 'photos'> &
  Pick<Address, 'city' | 'state'> &
  Pick<Breeds, 'primary'>;

const animalReducer = (currentState: DetailsAnimal, newState: Animal): DetailsAnimal => {
  const {
    contact: {
      address: { city, state },
    },
    breeds: { primary },
    ...restState
  } = newState;
  return { ...currentState, ...restState, city, state, primary };
};

export const Details: React.FC<{ path: string; id?: string }> = ({ id = '' }) => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [, /*error*/ setError] = useState<Error>();
  const [theme /*, setTheme*/] = useContext<(string | any)[]>(ThemeContext);

  const [{ name, type, city, state, description, photos, primary: breed }, setState]: [
    DetailsAnimal,
    Dispatch<Animal>
  ] = useReducer(animalReducer, {
    name: '',
    type: '',
    description: '',
    photos: [],
    city: '',
    state: '',
    primary: '',
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
      <Caroussel photos={photos} />
      <div>
        <h1>{name}</h1>
        <h2>{`${type} - ${breed} - ${city}, ${state}`}</h2>
        <button style={{ backgroundColor: theme }}>{`Adopt ${name}`}</button>
        <p>{description}</p>
      </div>
    </div>
  );
};
