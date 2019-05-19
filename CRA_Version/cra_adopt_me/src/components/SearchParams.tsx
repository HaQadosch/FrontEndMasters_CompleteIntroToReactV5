import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import { useDropdown } from '../utils/useDropdown';

export const SearchParams: React.FC = () => {
  const [location, setLocation] = useState<string>('Seattle, WA');
  const [breeds, setBreeds] = useState<string[]>([]);
  const [animal, setAnimal, AnimalDropdown] = useDropdown('Animal', 'all', ANIMALS);
  const [breed, setBreed, BreedDropdown] = useDropdown('Breed', 'dog', breeds);

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

  return (
    <div className='search-params'>
      <form action=''>
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
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
