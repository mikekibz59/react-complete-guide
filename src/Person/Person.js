import React from 'react'
import './Person.css'
const person = (props) => {
  return (
    <div className= 'Person'>
      <p onClick= {props.click} onChange= {props.change}> I am a person named: {props.name} and i am these years old: {props.age}</p>
      <input type='text' onChange={props.change}/>
    </div>
  )
};

export default person