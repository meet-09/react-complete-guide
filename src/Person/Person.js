import React from 'react'
import './Person.css';

const person = (props) => {
    return (
    <div className ="Person">
        <p onClick={props.click}>this is {props.name}!!! and this is my age : {props.age}!!!</p>
        <p>{props.children}</p>
        <input onChange={props.change} value={props.name}/>
    </div>
    );
}


export default person;