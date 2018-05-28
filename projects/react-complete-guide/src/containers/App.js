import React, { Component } from 'react';

//import Radium, { StyleRoot } from 'radium';

import classes from './App.css';

import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';

export const AuthContext = React.createContext(false);

class App extends Component {

  state = {
    persons: [
      { id: '100000001', name: 'Patrik', age: 40 },
      { id: '100000002', name: 'Julia', age: 29 },
      { id: '100000003', name: 'Hieha', age: 89 }
    ],
    showPersons: false,
    toggleClicked: 0,
    authenticated: false
  };

  constructor(props) {
    super(props);
    console.log(`appJs, constructor body executing, ${props}`);

    // may initialize state 
    // don't cause side effects
  }

  UNSAFE_componentWillMount() {
    console.log('appJs, UNSAFE_componentWillMount body executing');

    // not really used anymore
  }

  componentDidMount() {
    console.log('appJs, componentDidMount body executing');

    // don't update the state
    // you can cause side-effects
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('appJs, shouldComponentUpdate body executing');

    //return this.state.showPersons !== nextState.showPersons;
    return true;
  }

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
   
    this.setState((prevState, props) =>{

      return {
        showPersons: !prevState.showPersons,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  };

  loginHandler = () => {
    console.log('loginHandler');
    
    this.setState({
      authenticated: true
    });

    console.log("state", this.state);
  }

  render() {

    console.log('appJs, render body executing');

    let persons = null;

    if (this.state.showPersons) {
      persons =
        <Persons
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          persons={this.state.persons}
          isAuthenticated={this.state.authenticated}
        >
        </Persons>
    }
    return (
      <Auxiliary>
        <button
          onClick={() => {this.setState({showPersons: true})}}
          >
          Show Persons
        </button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          login={this.loginHandler}
        >
        </Cockpit>
        <AuthContext.Provider
          value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </Auxiliary>
      // <WithClass classes={classes.app}>
      //   <button
      //     onClick={() => {this.setState({showPersons: true})}}
      //     >
      //     Show Persons
      //   </button>
      //   <Cockpit
      //     appTitle={this.props.title}
      //     showPersons={this.state.showPersons}
      //     persons={this.state.persons}
      //     clicked={this.togglePersonsHandler}
      //   >
      //   </Cockpit>
      //   {persons}
      // </WithClass>
      // <div className={classes.app}>
      //   <button
      //     onClick={() => {this.setState({showPersons: true})}}
      //     >
      //     Show Persons
      //   </button>
      //   <Cockpit
      //     appTitle={this.props.title}
      //     showPersons={this.state.showPersons}
      //     persons={this.state.persons}
      //     clicked={this.togglePersonsHandler}
      //   >
      //   </Cockpit>
      //   {persons}
      // </div>
    );
  }
}

//export default Radium(App);
export default withClass((App), classes.app);
