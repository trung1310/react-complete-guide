
import React from 'react'

const person = props => {
    return (
        <div>
           <h1>{props.name} + {props.age} years old</h1>
           <p onClick={props.clickMe}>{props.children}</p>
           <input type="text" onChange={props.changed}/>
        </div>

    )
};

export default person;