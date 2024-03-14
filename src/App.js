import './App.css';
import {useEffect, useState} from 'react';
import Koenigsegg from './images/Koenigsegg.png';
import Clock from './Clock.js';
import Import from './Import.js'

function App() {
  const [value, setValue] = useState(false);

  let userData = {
    firstname : "Gohan",
    lastname : "Goku",
  };

  useEffect(() => {
    console.log("Value Updated")
  }, [value])

  const element = <h1>Goku part of react</h1>

  function returname(prop){
    return (
      <div>
        <p>Welcome, {prop.firstname + " " + prop.lastname}</p>
      </div>
    )
  }


  
  return (
    <>
      <p>Testing Goku</p>
      <button onClick = { () => setValue(!value)}>Click to change boolean value</button>
      <p>Is Goku stronger than Vegeta? {value.toString()}</p>
      <img className='koenigsegg-image' src = {Koenigsegg} alt = "Koenigsegg picure"/>
      <div>{element}</div>

      <div>
        {returname(userData)}
      </div>



      <Clock />

      <Import user = {userData}/>

      
    </>
  );
}

export default App;


