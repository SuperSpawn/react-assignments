
import React, {useState, useEffect} from 'react';


function MyComp() {
    const [favoriteColor, setFavoriteColor] = useState('cyan');

    useEffect(() => {
        setTimeout(() => {
            setFavoriteColor('blue');
        }, 1000)
    }, [])

    return (
        <div className='MyComp-container'>
            <h1>My favourite color is {favoriteColor}</h1>
            <div id='spaceship'></div>
        </div>
    )
}

export default MyComp;
