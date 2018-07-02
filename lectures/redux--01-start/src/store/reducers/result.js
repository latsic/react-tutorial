
import * as actionTypes from '../actions';

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {

  switch(action.type) {

    case actionTypes.STORE_RESULT:

      const id = Math.floor(Math.random() * 1000000);

      return {
        ...state,
        results: [...state.results, {id: id, val: action.result}]
      };
    case actionTypes.DELETE_RESULT:

      console.log('delete result');
      
      return {
        ...state,
        results: state.results.filter(item => item.id != action.id)
      }

    default:
      console.log('default');
      
      return state;
  }
};

export default reducer;