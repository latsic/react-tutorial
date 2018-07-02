
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case actionTypes.ADD_INGREDIENT: {

      const ingName = action.payload.ingredientName;

      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [ingName]: state.ingredients[ingName] + 1
        },
        totalPrice: state.totalPrice + action.payload.price
      }
    }
    case actionTypes.REMOVE_INGREDIENT: {

      // const oldCount = state.ingredients[action.payload.ingredientName]
      //   ? state.ingredients[action.payload.ingredientName]
      //   : 0;

      // if(oldCount > 0) {

      //   const newIngredients = {...state.ingredients};
      //   newIngredients[action.payload.ingredientName] -= 1;

      //   return {
      //     ...state,
      //     ingredients: newIngredients,
      //     totalPrice: state.totalPrice - action.payload.price
      //   }
      // }
      // break;

      const ingName = action.payload.ingredientName;
      return {
        ...state, 
        ingredients: {
          ...state.ingredients,
          [ingName]: state.ingredients[ingName] > 0
            ? state.ingredients[ingName] - 1
            : 0
        },
        totalPrice: state.totalPrice - action.payload.price
      };
    }
    case actionTypes.SET_INGREDIENTS: {
      console.log('SETINGREDIENTS');
      
      return {
        ...state,
        ingredients: action.payload.ingredients,
        totalPrice: initialState.totalPrice,
        error: false,
        loading: false
      }
    }
    case actionTypes.FETCH_INGREDIENTS_FAILED: {
      return {
        ...state,
        error: true
      };
    }
    default:
      return state;
  }
};

export default reducer;