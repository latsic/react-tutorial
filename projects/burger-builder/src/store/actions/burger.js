
import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (ingredientName, price) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    payload: {
      ingredientName,
      price
    }
  };
};
export const removeIngredient = (ingredientName, price) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    payload: {
      ingredientName,
      price
    }
  };
};
export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    payload: {
      ingredients
    }
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  };
};

export const initIngredients = (url = '/ingredients.json') => {
  return dispatch => {
    axios.get(url)
    .then(response => {
      dispatch(setIngredients(response.data));
    })
    .catch(error => {
      dispatch(fetchIngredientsFailed());
    });
  }
};
