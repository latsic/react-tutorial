import React from 'react';
//import Radium from 'radium';

import classes from './Person.css';

const person = (props) => {

  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '450px'
  //   }
  // };

  // const rnd = Math.random();
  //   if(rnd > 0.07) {
  //     throw new Error('Something went wrong');
  //   }


  return (

    
    <div
      className={classes.Person}
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