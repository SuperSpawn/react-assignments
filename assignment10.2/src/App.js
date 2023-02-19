import './App.css';
import { useRef } from 'react';

import blackAndWhiteImage from './assets/blackandwhite.jpg'
import colorImage from './assets/color.jpg'
import blackAndWhiteImage2 from './assets/blackandwhite2.jpg'
import colorImage2 from './assets/color2.jpg'



function App() {
    const imageRef = useRef(null);
    const imageRef2 = useRef(null);

    function handlerOnMouseOver(ref, color) {
        ref.current.src = color;
    }
    function handlerOnMouseLeave(ref, blackandwhite) {
        ref.current.src = blackandwhite;
    }

    

    return (
        <div>
            <img onMouseOver={() => { handlerOnMouseOver(imageRef, colorImage) }} 
                onMouseLeave={() => { handlerOnMouseLeave(imageRef, blackAndWhiteImage) }}
                ref={imageRef} src={blackAndWhiteImage} alt='black and white'/>
            <img onMouseOver={() => { handlerOnMouseOver(imageRef2, colorImage2)}}
                onMouseLeave={() => { handlerOnMouseLeave(imageRef2, blackAndWhiteImage2)}}
                ref={imageRef2} src={blackAndWhiteImage2} alt='black and white'/>
        </div>
    )
}


export default App;
