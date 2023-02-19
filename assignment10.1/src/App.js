import './App.css';
import { useRef } from 'react';

function App() {

  const talalRef = useRef(null);

  const handlePause = () => {
    talalRef.current.pause();
  };

  const handleResume = () => {
    talalRef.current.play();
  }

  return (
    <div>
      <video width="600" height="420" ref={talalRef} src="./videos/bloons.mp4" controls />
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleResume}>Resume</button>
    </div>
  );
}


export default App;
