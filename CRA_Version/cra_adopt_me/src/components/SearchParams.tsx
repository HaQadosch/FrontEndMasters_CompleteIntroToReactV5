import React, { useState, useEffect, useContext } from 'react';
import pet, { ANIMALS, AnimalsResponse, Animal, AnimalsParams } from '@frontendmasters/pet';
import { Results } from './Results';
import { useDropdown } from '../utils/useDropdown';
import { ThemeContext } from './ThemeContext';

export const SearchParams: React.FC<{ path: string }> = () => {
  const [location, setLocation] = useState<string>('Seattle, WA');
  const [breeds, setBreeds] = useState<string[]>([]);
  const [animal /*setAnimal*/, , AnimalDropdown] = useDropdown('Animal', 'all', ANIMALS);
  const [breed, setBreed, BreedDropdown] = useDropdown('Breed', 'dog', breeds);
  const [pets, setPets] = useState<Animal[]>([]);
  const [theme, setTheme] = useContext<(string | any)[]>(ThemeContext);

  const requestPet = async (requestParams: AnimalsParams) => {
    const { animals }: AnimalsResponse = await pet.animals(requestParams);

    setPets(animals || []);
    console.log({ pets });
  };

  useEffect(() => {
    setBreeds([]);
    setBreed('');

    pet.breeds(animal).then(({ breeds: petBreeds }) => {
      if (petBreeds) {
        const breedsNames = petBreeds.map(({ name }) => name);
        setBreeds(breedsNames);
      }
    }, console.error);
  }, [animal, setBreed]);

  const onInputLocationChange: React.ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) =>
    setLocation(value);

  const onFormSubmit: React.ChangeEventHandler<HTMLFormElement> = evt => {
    evt.preventDefault();
    requestPet({
      location,
      breed,
      type: animal,
    });
  };

  return (
    <div className='search-params'>
      <form action='/' onSubmit={onFormSubmit}>
        <label htmlFor='location'>
          Location
          <input
            type='text'
            name='location'
            id='location'
            value={location}
            onChange={onInputLocationChange}
            placeholder='location'
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button type='submit' style={{ backgroundColor: theme }}>
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};
