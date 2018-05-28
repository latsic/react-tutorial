import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import Radium from 'radium';

import classes from './Person.css';
//import WithClass from '../../../hoc/WithClass';
import withClass from '../../../hoc/withClass';
import Auxiliary from '../../../hoc/Auxiliary';

import {AuthContext} from '../../../containers/App';

//const Fragment = React.Fragment;


class Person extends Component {

  

  constructor(props) {
    super(props);
    console.log(`personJs, constructor body executing, ${props}`);

    this.inputElement = React.createRef();

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

  componentDidMount() {

    if(this.props.doFocus) {
      this.inputElement.current.focus();
    }
  }

  focus() {
    this.inputElement.current.focus();
  }


  render() {

    console.log('personJs, render body executing');


    return (
    <Auxiliary
      >
      {/* {this.props.authenticated
        ? <p>Authenticated</p>
        : <p>NOT authenticated</p>
      } */}

      <AuthContext.Consumer>
      {
        someVal => someVal ? <p>Authenticated</p> : <p>NOT Authenticated</p>
      }
      </AuthContext.Consumer>
      <p
        onClick={this.props.clickPerson}>
        I'm a {this.props.name} and I'm {this.props.age} years old, {Math.floor(Math.random() * 30)}
      </p>
      <p>{this.props.children}</p>
      <input
        type="text" 
        onChange={this.props.changed}
        value={this.props.name}
        ref={this.inputElement}
      />
    </Auxiliary>
    // <WithClass
    //   classes={classes.Person}
    //   >
    //   <p
    //     onClick={this.props.clickPerson}>
    //     I'm a {this.props.name} and I'm {this.props.age} years old, {Math.floor(Math.random() * 30)}
    //   </p>
    //   <p>{this.props.children}</p>
    //   <input
    //     type="text" 
    //     onChange={this.props.changed}
    //     value={this.props.name}
    //   />
    // </WithClass>
    // <div
    //   className={classes.Person}
    //   >
    //   <p
    //     onClick={this.props.clickPerson}>
    //     I'm a {this.props.name} and I'm {this.props.age} years old, {Math.floor(Math.random() * 30)}
    //   </p>
    //   <p>{this.props.children}</p>
    //   <input
    //     type="text" 
    //     onChange={this.props.changed}
    //     value={this.props.name}
    //   />
    // </div>
    );
  }
}

Person.propTypes = {
  clickPerson: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}


export default withClass(Person, classes.Person);



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