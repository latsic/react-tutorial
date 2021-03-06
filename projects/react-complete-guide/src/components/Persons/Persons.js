
import React, {Component} from 'react';

import Person from './Person/Person'

class Persons extends Component {

  constructor(props) {
    super(props);
    console.log(`personsJs, constructor body executing, ${props}`);

    this.lastPersonRef = React.createRef();

    // may initialize state 
    // don't cause side effects
  }

  UNSAFE_componentWillMount() {
    console.log('personsJs, UNSAFE_componentWillMount body executing');

    // not really used anymore
  }

  componentDidMount() {
    console.log('personsJs, componentDidMount body executing');

    this.lastPersonRef.current.focus();

    // don't update the state
    // you can cause side-effects
  }

 
  render() {

    console.log('personsJs, render body executing');

    


    return this.props.persons.map((person, index) => {
      return(
        <Person
          name={person.name}
          age={person.age}
          clickPerson={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, person.id)}
          key={person.id}
          doFocus={index === 0}
          ref={this.lastPersonRef}
          authenticated={this.props.isAuthenticated}
          > Some Children wich are passes as 'props.children'
            Here it's only text, but it could be anything.
        </Person>
      );
    })
  }
}

export default Persons;



// const persons = (props) =>
//   props.persons.map((person, index) => {
//     return(
//       <Person
//         name={person.name}
//         age={person.age}
//         clickPerson={() => props.clicked(index)}
//         changed={(event) => props.changed(event, person.id)}
//         key={person.id}
//         >
//       </Person>
//     );
//   }
// );

// export default persons;