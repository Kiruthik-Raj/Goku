import React from 'react'
import './App.css'

function showImportedContent(props)
{

    console.log(props)

    return (
        <div>
            <p>Printing Imported Content</p>
            <p>
                Imported content is: {props.user.firstname + " " + props.user.lastname}
            </p>
        </div>
    )


    
}

export default showImportedContent;