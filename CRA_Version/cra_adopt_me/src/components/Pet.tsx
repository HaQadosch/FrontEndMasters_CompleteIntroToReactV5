import React from 'react';
import { Animal } from '@frontendmasters/pet';
import { Link } from '@reach/router';

export const Pet: React.FC<Animal> = ({
  id,
  name,
  type: animal,
  breeds: { primary: breed } = { primary: '' },
  photos: media = [],
  contact: { address } = { address: { city: '', state: '' } },
}) => {
  let hero = media.length ? media[0].small : 'http://placecorgi.com/300/300';
  return (
    <Link to={`/details/${id}`} className='pet'>
      <div className='image-container'>
        <img src={hero} alt={name} />
      </div>
      <div className='info'>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${address.city}, ${address.state}`}</h2>
      </div>
    </Link>
  );
};
