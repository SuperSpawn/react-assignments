
import './Box.css'
import Content from './Content'
import React,{useState} from 'react';


function Box() {
    const [visible, setVisible] = useState(true);

    return (
        <div className='Box'>
            <button onClick={() => setVisible(!visible)}>Show/Hide</button>
            <Content visible={visible}/>
        </div>
    )
}

export default Box;

