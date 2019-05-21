import React, { useState, ReactEventHandler, useEffect } from 'react';
import { Photo } from '@frontendmasters/pet';

export const Caroussel: React.FC<{ photos: Photo[] }> = ({ photos: media }) => {
  const smallDefault = 'http://placecorgi.com/300/300';
  const largeDefault = 'http://placecorgi.com/600/600';
  const [photos, setPhotos] = useState<Photo[]>(media);
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    setPhotos(media.map(photo => ({ large: largeDefault, small: smallDefault, ...photo })));
  }, [media]);

  const onImgClick = (index: number): ReactEventHandler => ({ target }: React.SyntheticEvent) => {
    setActive(index);
  };

  return (
    <div className='carousel'>
      <img src={photos[active].large} alt='active pet' />
      <div className='carousel-smaller'>
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo.small}
            alt='small pet'
            className={index === active ? 'active' : ''}
            onClick={onImgClick(index)}
          />
        ))}
      </div>
    </div>
  );
};
