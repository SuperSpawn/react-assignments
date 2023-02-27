import React from 'react'
import { Father } from './Father'

import '../styles/reset.css'
import '../styles/Grandfather.css'

import { createContext } from 'react';


export const GiftsContext = createContext([]);

export const Grandfather = () => {

  return (
    <div className='Grandfather-container'>
        <GiftsContext.Provider value={['Toy car', 'teddy bear', 'bike']}>
            <Father/>
        </GiftsContext.Provider>
    </div>
  )
}

