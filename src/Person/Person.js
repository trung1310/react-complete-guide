
import React from 'react'
import Radium from 'radium';

import './Person.css'


const person = (props) => {
    return (
        <div className="Person">
           <h1>{props.name} + {props.age} years old</h1>
           <p onClick={props.clickMe}>{props.children}</p>
           <input type="text" onChange={props.changed} value={props.name}/>
        </div>

    )
};

export default Radium(person);