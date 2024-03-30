import './App.css';
import {useEffect, useState} from 'react';
import Koenigsegg from './images/Koenigsegg.png';
import Clock from './Clock.js';
import Import from './Import.js'
import LoginControl from './LoginControl.js'
import Blog from './Blog.js'
import Form from './Form.js'
import ApiFetch from './ApiFetch.js';


function App() {
  const [value, setValue] = useState(false);

  let userData = {
    firstname : "Gohan",
    lastname : "Goku",
  };

  const posts = [
    {
      id : 1,
      title : "Post 1",
      content : "This blog is about me learning vite react and normal react at the same time!",
    },{
      id : 2,
      title : "Post 2",
      content : "This blog is about me learning vite react and normal react at the same time!",
    },{
      id : 3,
      title : "Post 3",
      content : "This blog is about me learning vite react and normal react at the same time!",
    },
  ];

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

  const [show, setShow] = useState(true);

  function toggle() {
    setShow(!show);
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

      <button onClick = {toggle}>Click to change time visibility</button>

      {show ?  <Clock /> : "Nothing to display!!"}

      <Import user = {userData}/>

      <LoginControl />

      <Blog contents = {posts}/>

      <Form />

      <ApiFetch />

      
    </>
  );
}

export default App;


