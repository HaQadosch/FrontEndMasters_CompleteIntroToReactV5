import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import { Modal } from '../components/Modal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Modal />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Modal matches the snapshot', () => {
  const { debug, asFragment } = render(<Modal />);
  expect(asFragment()).toMatchSnapshot();
  // debug(asFragment());
});
