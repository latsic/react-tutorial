import React from 'react';
//import Radium from 'radium';

import './Person.css';

const person = (props) => {

  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '450px'
  //   }
  // };

  return (
    <div
      className="Person"
      >
      <p
        onClick={props.clickPerson}>
        I'm a {props.name} and I'm {props.age} years old, {Math.floor(Math.random() * 30)}
      </p>
      <p>{props.children}</p>

      <input
        type="text" 
        onChange={props.changed}
        value={props.name}
      />

    </div>
  );
};

//export default Radium(person);
export default person;