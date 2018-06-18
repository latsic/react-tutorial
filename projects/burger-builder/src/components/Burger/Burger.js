
import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

  console.log('klkalka', props.ingredients);

  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientName => {
      return [...Array(props.ingredients[ingredientName])]
        .map((_, i) => {
          return (
            <BurgerIngredient
              type={ingredientName}
              key={ingredientName + i}
            />
          );
        });
    })
    .reduce((sumArray, item) => {
      return sumArray.concat(item);
    }, []);

  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }
  console.log('transformedIngredients', transformedIngredients);
  return (

    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;