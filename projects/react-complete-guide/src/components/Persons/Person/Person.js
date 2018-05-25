import React, { Component } from 'react';
//import Radium from 'radium';

import classes from './Person.css';

class Person extends Component {

  constructor(props) {
    super(props);
    console.log(`personJs, constructor body executing, ${props}`);

    // may initialize state 
    // don't cause side effects
  }
/*
  UNSAFE_componentWillMount() {
    console.log('personJs, UNSAFE_componentWillMount body executing');

    // not really used anymore
  }

  componentDidMount() {
    console.log('personJs, componentDidMount body executing');

    // don't update the state
    // you can cause side-effects
  }

  componentWillUnmount() {
    console.log('personJs, componentWillUnmount body executing');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('personJs, shouldComponentUpdate body executing');
    return true;
  }

  UNSAFE_componentWillUpdate() {
    console.log('personJs, UNSAFE_componentWillUpdate body executing');
  }

  componentDidUpdate() {
    console.log('personJs, UNSAFE_componentWillUpdate body executing');
  }

  UNSAFE_componentWillReceiveProps() {
    console.log('personJs, componentDidUpdate body executing');
  }
*/

  render() {

    console.log('personJs, render body executing');


    return (
    <div
      className={classes.Person}
      >
      <p
        onClick={this.props.clickPerson}>
        I'm a {this.props.name} and I'm {this.props.age} years old, {Math.floor(Math.random() * 30)}
      </p>
      <p>{this.props.children}</p>
      <input
        type="text" 
        onChange={this.props.changed}
        value={this.props.name}
      />
    </div>
    );
  }
}

export default Person;



// const person = (props) => {


//   return (
    
//     <div
//       className={classes.Person}
//       >
//       <p
//         onClick={props.clickPerson}>
//         I'm a {props.name} and I'm {props.age} years old, {Math.floor(Math.random() * 30)}
//       </p>
//       <p>{props.children}</p>

//       <input
//         type="text" 
//         onChange={props.changed}
//         value={props.name}
//       />

//     </div>
//   );
// };

// //export default Radium(person);
// export default person;