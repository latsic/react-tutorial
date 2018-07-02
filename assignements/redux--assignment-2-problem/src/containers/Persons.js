import React, { Component } from 'react';

import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import * as personsActions from '../store/actions';

class Persons extends Component {
    
    render () {

        return (
            <div>
                <AddPerson personAdded={this.props.personAddedHandler} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => {
                            this.props.personDeletedHandler(person.id)
                        }}
                    />
                ))}
            </div>
        );
    }
}

//mapStateToProps
const mapStateToProps = state => {
    return {
        persons: state.personsReducer.persons
    };
};
const mapDispatchToProps = dispatch => {
    return {
        personDeletedHandler: (personId) => {
            dispatch({
                type: personsActions.DELETE_PERSON,
                personId: personId
            });
        },
        personAddedHandler: (name, age) => {

            console.log('add');
            

            dispatch({
                type: personsActions.ADD_PERSON,
                personData:{
                    name: name,
                    age: age
                }
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);