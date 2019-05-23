import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import { ThemeContext } from '../components/ThemeContext';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ThemeContext.Provider value={['red', () => 'red']} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('ThemeContext matches the snapshot', () => {
  const { debug, asFragment } = render(<ThemeContext.Provider value={['red', () => 'red']} />);
  expect(asFragment()).toMatchSnapshot();
  // debug(asFragment());
});
