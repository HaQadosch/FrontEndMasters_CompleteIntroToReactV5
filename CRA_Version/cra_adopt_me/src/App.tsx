import React from 'react'
import './App.css'

const Pet = () => {
  return React.createElement(
    'div',
    {},
    [
      React.createElement('h1', {}, 'Luna'),
      React.createElement('h2', {}, 'Dog'),
      React.createElement('h2', {}, 'Havanese')
    ]
  )
}

export const App: React.FC = () => {
  return React.createElement(
    'div',
    {},
    [
      React.createElement('h1', {}, 'Adopt Me !'),
      React.createElement(Pet),
      React.createElement(Pet),
      React.createElement(Pet)
    ]
  )
}