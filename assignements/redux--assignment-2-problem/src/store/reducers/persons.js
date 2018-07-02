
import * as personsActions from '../actions';

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case personsActions.ADD_PERSON:
      console.log('reducer add');
      
      return {
        persons: [...state.persons, {
          id: Math.random(),
          name: action.personData.name,
          age: action.personData.age
        }]
      }

    case personsActions.DELETE_PERSON:
      return {
        persons: state.persons.filter(person => person.id != action.personId)
      }
    default:
      return state;
  }
};

export default reducer;
