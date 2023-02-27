import React from 'react'

import { useContext } from 'react';
import { GiftsContext } from './Grandfather'

import '../styles/reset.css'
import '../styles/Grandson.css'


export const Grandson = () => {
    const gifts = useContext(GiftsContext);
  return (
    <div>
        {
            gifts.map((gift, index) => {
                return (
                    <div key={index}>
                        <p className='Grandson-gift'>{gift}</p>
                    </div>
                )
            })
        }
    </div>
  )
}
