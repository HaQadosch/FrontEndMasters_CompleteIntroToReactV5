import React, { useState } from 'react';

export const SearchParams: React.FC = () => {
  const [location, setLocation] = useState<string>('Seattle, WA');
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
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
