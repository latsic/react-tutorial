import React, { Component } from 'react';

//import Radium, { StyleRoot } from 'radium';

import './App.css';

import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { id: 'lkalsklks2', name: 'Patrik', age: 40 },
      { id: 'klke', name: 'Julia', age: 29 },
      { id: 'lkjkjdd', name: 'Hieha', age: 89 }
    ],
    showPersons: false
  };

  switchNameHandler = (newName) => {
    console.log('Was clicked');
    console.log(this.state);

    this.state.persons[0]='Patsrik';

    this.setState({
      persons: [
        { name: newName, age: 40 },
        { name: 'Julia', age: 39 },
        { name: 'Hieha', age: 89 }
      ]
    });

    // this.setState({
    //   persons: [...this.state.persons]
    // });
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
   
    this.setState({
      showPersons: !this.state.showPersons
    })
  };

  renderPersons = () => {

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            clickPerson={this.switchNameHandler.bind(this, 'KatKat')}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            clickPerson={this.switchNameHandler}
            />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            clickPerson={this.switchNameHandler}
            changed={this.nameChangedHandler}
            >
            My Hobbies are
          </Person>
        </div> 
      );
    }
    return persons;
  };


  renderPersons2 = (style) => {

    if(!this.state.showPersons) {
      return null;
    }

    style.backgroundColor = 'red';
    style[':hover'] = {
      backgroundColor: 'salmon',
      color: 'black'
    };

    return (
      <div>
        {
          this.state.persons.map((person, index) => {
            return(
              <Person
                name={person.name}
                age={person.age}
                clickPerson={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                >
              </Person>
            );
          })
        }
      </div>
    );
  };

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    };

    let persons = this.renderPersons2(style);


    let classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }


    return (
      // <StyleRoot>
        <div className="App">
          <h1>Hi I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working.</p> 
          {/* <button
            style={style}
            onClick={() => this.switchNameHandler('ZatZat')}
            >
            Switch Name
          </button> */}
          <button
            onClick={this.togglePersonsHandler}
            style={style}
            >
            Toggle Persons
          </button>
          {/* {persons} */}
          {persons}
        </div>
      // </StyleRoot>
    );

    // return React.createElement(
    //   'div', {className: 'App'},
    //   React.createElement('h1', null, 'Hi I\'m a React App!!!'));
  }
}

//export default Radium(App);
export default App;
