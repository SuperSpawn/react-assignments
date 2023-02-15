

import './Son.css'
import Bloon from './Bloon'


function Son(props) {
    return (
        <div className="Son">
            <h3>{props.name}</h3>
            <Bloon color={props.color}/>
        </div>
    )
} 

export default Son;