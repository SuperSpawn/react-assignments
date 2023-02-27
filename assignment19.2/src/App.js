import './styles/reset.css'
import "./App.css";

import { useState } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import { About } from './components/About';


import { DarkContext } from './services/contexts';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkContext.Provider value={[darkMode, setDarkMode]}>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Home/> }/>
          <Route path='/about' element={ <About/> }/>
        </Routes>
      </BrowserRouter>
    </DarkContext.Provider>
  )
}

export default App;