import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import { SearchParams } from '../components/SearchParams';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchParams />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('SearchParams matches the snapshot', () => {
  const { debug, asFragment } = render(<SearchParams />);
  expect(asFragment()).toMatchSnapshot();
  // debug(asFragment());
});
