import React from 'react'
import {useState} from 'react'

import './App.css'

function Form()
{
    const initialData = {
        name : "",
        password  : "",
        email : "",
        textarea : "",
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(formContent, undefined, 3))

    }

    const [formContent, setformContent] = useState(initialData);

    return  (
        <div>
            <form id = "myform" onSubmit = {handleSubmit}>
                <label>Username</label>
                <input type = "text" onChange = {(e) => {setformContent({...formContent, name : e.target.value})}}/>
                <label>Pasword</label>
                <input type = "password" onChange = {(e) => {setformContent({...formContent, password  : e.target.value})}}/>
                <label>Email</label>
                <input type = "email" onChange = {(e) => {setformContent({...formContent, email : e.target.value})}}/>
                <label>Favorite Movie? </label>
                <textarea onChange = {(e) => {setformContent({...formContent, textarea : e.target.value})}}></textarea>
                <button type = "submit">Submit</button>
            </form>

            <p>
                {JSON.stringify(formContent, undefined, 2)}
            </p>
        </div>
    )
}

export default Form;