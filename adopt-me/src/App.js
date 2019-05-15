const Pet = ({ name, animal, breed }) => {
  return window.React.createElement(
    'div',
    {},
    [
      window.React.createElement('h1', {}, name),
      window.React.createElement('h2', {}, animal),
      window.React.createElement('h2', {}, breed)
    ]
  )
}

const App = () => {
  return window.React.createElement(
    'div',
    {},
    [
      window.React.createElement('h1', {}, 'Adopt Me !'),
      window.React.createElement(Pet, { name: 'Luna', animal: 'dog', breed: 'havanese' }),
      window.React.createElement(Pet, { name: 'Peper', animal: 'bird', breed: 'cockatiel' }),
      window.React.createElement(Pet, { name: 'Doink', animal: 'cat', breed: 'Mixed' })
    ]
  )
}

window.ReactDOM.render(window.React.createElement(App), document.getElementById('root'))
