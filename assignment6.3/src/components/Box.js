
import './Box.css'
import React, {useState} from 'react';



function Box() {
    const [count, setCount] = useState(0);
    let textColor;

    function inc() {
        if(count < 10) setCount(count + 1);
    }
    function dec() {
        if(count > -10) setCount(count - 1);
    }

    if(count > 0) {
        textColor = 'green';
    }
    else if(count === 0) {
        textColor = 'black';
    }
    else {
        textColor = 'red';
    }

    return (
        <div className='Box'>
            <button onClick={dec}>-</button>
            <p style={{color: textColor}}>{count}</p>
            <button onClick={inc}>+</button>
        </div>
    )
}

export default Box;
