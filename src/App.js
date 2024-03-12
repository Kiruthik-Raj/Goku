import './App.css';
import {useEffect, useState} from 'react';
import Koenigsegg from './images/Koenigsegg.png';
import Clock from './Clock.js';

function App() {
  const [value, setValue] = useState(false);

  useEffect(() => {
    console.log("Value Updated")
  }, [value])


  
  return (
    <>
      <p>Testing Goku</p>
      <button onClick = { () => setValue(!value)}>Click to change boolean value</button>
      <p>Is Goku stronger than Vegeta? {value.toString()}</p>
      <img className='koenigsegg-image' src = {Koenigsegg} alt = "Koenigsegg picure"/>

      <Clock />
    </>
  );
}

export default App;
