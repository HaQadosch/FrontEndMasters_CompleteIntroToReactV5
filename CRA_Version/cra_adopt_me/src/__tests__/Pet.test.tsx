import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import { Pet } from '../Pet';

const testPet = {
  name: 'testName',
  animal: 'testAnimal',
  breed: 'testBreed',
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pet {...testPet} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Pet matches the snapshot', () => {
  const { debug, asFragment } = render(<Pet {...testPet} />);
  expect(asFragment()).toMatchSnapshot();
  debug(asFragment());
});
