import React from 'react'

import './styles/reset.css'
import './App.css'


import { Counter } from './components/Counter'




function App() {
  return (
    <div className='App-container'>
      <Counter/>
      <Counter/>
    </div>
  )
}

export default App;