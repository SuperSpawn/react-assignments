import React from 'react'
import '../styles/reset.css'
import '../styles/components/Home.css'

import { TopMenu } from './TopMenu';

import { useContext } from 'react'
import { DarkContext } from '../services/contexts'

export const Home = () => {
  const [darkMode, ] = useContext(DarkContext);

  return (
    <div className={'Home-container ' + (darkMode ? "dark" : "light")}>
      <TopMenu/>
      Home
    </div>
  )
}
