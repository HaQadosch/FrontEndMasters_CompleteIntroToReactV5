import React, { useEffect, useState } from 'react';
import pet, { Photo } from '@frontendmasters/pet';

export const Details: React.FC<{ path: string; id?: string }> = ({ id = '' }) => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<Error>();
  const [name, setName] = useState<string>('');
  const [animal, setAnimal] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [media, setMedia] = useState<Photo[]>([]);
  const [breed, setBreed] = useState<string>('');

  useEffect(() => {
    pet
      .animal(parseInt(id))
      .then(
        ({
          animal: {
            name,
            breeds: { primary },
            type,
            photos,
            description,
            contact: {
              address: { city, state },
            },
          },
        }) => {
          setName(name);
          setAnimal(type);
          setLocation(`${city}, ${state}`);
          setDescription(description);
          setMedia(photos);
          setBreed(primary);
          setLoading(false);
        },
      )
      .catch(petErr => setError(petErr));
  }, [id]);

  return loading ? (
    <h1>
      <span role='img' aria-label='sand-glass'>
        ⌛
      </span>{' '}
      Loading...{' '}
    </h1>
  ) : (
    <div className='details'>
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
        <button>{`Adopt ${name}`}</button>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Details;
