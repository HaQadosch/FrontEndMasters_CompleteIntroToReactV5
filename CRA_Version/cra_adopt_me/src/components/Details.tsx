import React, { useEffect, useState, useReducer, Dispatch, useContext } from 'react';
import pet, { Animal, Address, Breeds } from '@frontendmasters/pet';
import { Caroussel } from './Caroussel';
import { ThemeContext } from './ThemeContext';
import { navigate } from '@reach/router';
import { Modal } from './Modal';

type DetailsAnimal = Pick<Animal, 'name' | 'type' | 'description' | 'photos' | 'url'> &
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
  const [loading, setLoading] = useState<boolean>(true);
  const [, /*error*/ setError] = useState<Error>();
  const [theme /*, setTheme*/] = useContext<(string | any)[]>(ThemeContext);

  const [showModal, setShowModal] = useState<boolean>(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [{ name, type, city, state, description, photos, primary: breed, url }, setState]: [
    DetailsAnimal,
    Dispatch<Animal>
  ] = useReducer(animalReducer, {
    url: '',
    name: '',
    type: '',
    description: '',
    photos: [],
    city: '',
    state: '',
    primary: '',
  });

  const adopt = () => navigate(url);

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
        <button onClick={toggleModal} style={{ backgroundColor: theme }}>{`Adopt ${name}`}</button>
        <p>{description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {name} ?</h1>
              <div className='buttons'>
                <button onClick={adopt}>
                  Yes{' '}
                  <span role='img' aria-label='shiny heart'>
                    💖
                  </span>
                </button>
                <button onClick={toggleModal}>
                  No{' '}
                  <span role='img' aria-label='broken heart'>
                    💔
                  </span>
                </button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};
