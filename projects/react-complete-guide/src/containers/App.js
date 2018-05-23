import React, { Component } from 'react';

//import Radium, { StyleRoot } from 'radium';

//import appClasses from './App.css';

import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

class App extends Component {

  state = {
    persons: [
      { id: '100000001', name: 'Patrik', age: 40 },
      { id: '100000002', name: 'Julia', age: 29 },
      { id: '100000003', name: 'Hieha', age: 89 }
    ],
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {

    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  nameChangedHandler = (event, id) => {
    
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
      name: event.target.value
    };

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
   
    this.setState({
      showPersons: !this.state.showPersons
    })
  };

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons =
        <Persons
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          persons={this.state.persons}
        >
        </Persons>
    }
    return (
      <div>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        >
        </Cockpit>
        {persons}
      </div>
    );
  }
}

//export default Radium(App);
export default App;
