import React from 'react'
import './App.css'
import { Pet } from './Pet';

export const App: React.FC = () => {
  return React.createElement(
    'div',
    {},
    [
      React.createElement('h1', {}, 'Adopt Me !'),
      React.createElement(Pet, { name: 'Luna', animal: 'dog', breed: 'havanese' }),
      React.createElement(Pet, { name: 'Peper', animal: 'bird', breed: 'cockatiel' }),
      React.createElement(Pet, { name: 'Doink', animal: 'cat', breed: 'Mixed' })
    ]
  )
}