import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import { Caroussel } from '../components/Caroussel';

const photos = [
  {
    small: 'http://placecorgi.com/300/300',
    large: 'http://placecorgi.com/600/600',
    medium: '',
    full: '',
  },
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Caroussel photos={photos} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Caroussel matches the snapshot', () => {
  const { debug, asFragment } = render(<Caroussel photos={photos} />);
  expect(asFragment()).toMatchSnapshot();
  // debug(asFragment());
});
