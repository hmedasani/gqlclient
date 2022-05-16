import React from 'react'
import AppbarAtom from './a_atoms/layout/appbar'
import Router from './pages'

function App() {
  return (
    <div className="App">
      <AppbarAtom />
      <Router />
    </div>
  )
}

export default App
