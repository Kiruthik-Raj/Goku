import React, {useState, useEffect} from 'react';

import './App.css';

function ApiFetch()
{   
    let [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(err => console.log(err))



    }, [])

    return (
        <>
            <p>Fetching Data from an API</p>

            <ul>
                {data.map((list, index)=> {
                
                    return (
                        <p key = {index}>{list.id} . {list.name}</p>
                    );
                
                })}
            </ul>
        </>
    );
}

export default ApiFetch;