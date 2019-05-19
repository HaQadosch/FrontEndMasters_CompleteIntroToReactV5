import React from 'react';
import { Animal } from '@frontendmasters/pet';

export const Pet: React.FC<Animal> = ({
  id,
  name,
  type: animal,
  breeds: { primary: breed },
  photos: media,
  contact: { address },
}) => {
  let hero = media.length ? media[0].small : 'http://placecorgi.com/300/300';
  return (
    <a href={`/details/${id}`} className='pet'>
      <div className='image-container'>
        <img src={hero} alt={name} />
      </div>
      <div className='info'>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${address.city}, ${address.state}`}</h2>
      </div>
    </a>
  );
};
