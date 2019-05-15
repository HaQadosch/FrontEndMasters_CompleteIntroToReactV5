import React from 'react'
import './App.css'

const Pet: React.FC<{ name: string, animal: string, breed: string }> = ({ name, animal, breed }) => {
  return React.createElement(
    'div',
    {},
    [
      React.createElement('h1', {}, name),
      React.createElement('h2', {}, animal),
      React.createElement('h2', {}, breed)
    ]
  )
}

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