const Pet = () => {
  return window.React.createElement(
    'div',
    {},
    [
      window.React.createElement('h1', {}, 'Luna'),
      window.React.createElement('h2', {}, 'Dog'),
      window.React.createElement('h2', {}, 'Havanese')
    ]
  )
}

const App = () => {
  return window.React.createElement(
    'div',
    {},
    [
      window.React.createElement('h1', {}, 'Adopt Me !'),
      window.React.createElement(Pet),
      window.React.createElement(Pet),
      window.React.createElement(Pet)
    ]
  )
}

window.ReactDOM.render(window.React.createElement(App), document.getElementById('root'))
