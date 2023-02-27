import React from 'react'
import '../styles/reset.css'
import '../styles/components/About.css'
import { TopMenu } from './TopMenu'

import { useContext } from 'react'
import { DarkContext } from '../services/contexts'

export const About = () => {
  const [darkMode, ] = useContext(DarkContext);

  return (
    <div className={'About-container ' + (darkMode ? "dark" : "light")}>
      <TopMenu/>
      About
    </div>
  )
}
