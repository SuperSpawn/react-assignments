import React from 'react'

import { useCounter } from './useCounter'

import '../styles/reset.css'
import '../styles/Counter.css'

export const Counter = () => {

    const [counter, addOne, removeOne, double, divide] = useCounter(0);

    //const [counter, setCounter] = useState(0);

    // const addOne = () => {
    //     setCounter((prev) => prev + 1);
    // }

    

  return (
    <div className='Counter-container'>
        <p className='Counter-value'>{counter}</p>
        <div className='Counter-buttons-container'>
            <button onClick={addOne}>+ 1</button>
            <button onClick={removeOne}>- 1</button>
            <button onClick={double}>* 2</button>
            <button onClick={divide}>/ 2</button>
        </div>
    </div>
  )
}
