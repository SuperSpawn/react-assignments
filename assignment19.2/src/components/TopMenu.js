import React from 'react'
import { Outlet, Link } from 'react-router-dom'

import { useContext } from 'react'
import { DarkContext } from '../services/contexts'


export const TopMenu = () => {

    const [darkMode, setDarkMode] = useContext(DarkContext);

    const toggleHandler = () => {
        setDarkMode(!darkMode);
    }

  return (
    <div className='TopMenu-container'>
        <div className={'TopMenu-links-container ' + (darkMode ? "dark" : "light")}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
        <button onClick={toggleHandler} className='TopMenu-toggle-button'>Toggle</button>
        <Outlet/>
    </div>
  )
}
