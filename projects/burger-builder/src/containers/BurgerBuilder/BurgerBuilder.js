
import React, {Component} from 'react';

//import { Route } from 

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Error from '../../components/Burger/Error/Error';
import axios from '../../axios-orders';

// import Backdrop from '../../components/UI/Backdrop/Backdrop';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {

  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  }

  loadIngredients(
    url = '/ingredients.json') {

    this.setState({
      error: false
    });
  
    axios.get(url)
    .then(response => {
      this.setState({
        ingredients: response.data,
      });
      this.updatePurchaseState(this.state.ingredients);
    })
    .catch(error => {
      console.log('catched error', error);
      this.setState({
        error: true
      });
    });
    
  }

  componentDidMount() {
    this.loadIngredients('/ingredients.json');
  }

  ingredientsRetryHandler = () => {
    this.loadIngredients();
  }

  updatePurchaseState(ingredients) {

    const sum = Object.keys(ingredients)
      .reduce((sum, item) => sum + ingredients[item], 0);
    
    this.setState({
      purchasable: sum > 0
    });
  }

  addIngredientHandler = (type) => {

    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    
    updatedIngredients[type] = updatedCount;

    const priceAddtion = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddtion;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
   
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {

    const oldIngredientCount = this.state.ingredients[type];
    if(oldIngredientCount <= 0) {
      return;
    }

    const updatedIngredients = {
      ...this.state.ingredients
    };
    
    const newIngredientCount = oldIngredientCount - 1;
    updatedIngredients[type] = newIngredientCount;
    const priceReduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceReduction;
     
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseHandler = () => {
    console.log("purchaseHandler", this.state);
    this.setState({
      purchasing: true
    });
  }

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false
    });
  }

  purchaseContinueToCheckoutHandler = ()  => {
    
    // let qs = `?` +
    //         `salad=${this.state.ingredients.salad}&` +
    //         `bacon=${this.state.ingredients.bacon}&` +
    //         `cheese=${this.state.ingredients.cheese}&` +
    //         `meat=${this.state.ingredients.meat}`;
    
    const queryParams = [];
    for(let i in this.state.ingredients) {
        queryParams.push(
            encodeURIComponent(i)
          + '='
          + encodeURIComponent(this.state.ingredients[i]));
    }
    queryParams.push('price=' + this.state.totalPrice);
    const queryString = '?' + queryParams.join('&');

    this.props.history.push({
      pathname: '/checkout',
      search: queryString
    });
  }

  // purchaseContinueHandler = () => {
  //   //alert('You continue...');

  //   this.setState({
  //     loading: true
  //   });

  //   console.log(this.state)

  //   const order = {
  //     ingredients: this.state.ingredients,
  //     price: this.state.totalPrice,
  //     customer: {
  //       name: 'Test Name',
  //       address: {
  //         street: 'Teststreet 27',
  //         zipCode: '51896',
  //         country: 'Switzerland'
  //       },
  //       email: 'test11@test.com'
  //     },
  //     deliveryMethod: 'fastest'
  //   };

  //   axios.post('/orders.json', order)
  //   .then(response => {
  //     console.log('/orders.json response', response);
  //     this.setState({
  //       loading: false,
  //       purchasing: false
  //     });
  //   })
  //   .catch((error) => {
  //     console.log('/orders.json error', error);
  //     this.setState({
  //       loading: false,
  //       purchasing: false
  //     });
  //   });
  // }

  render() {

    const disabledInfo = {
      ...this.state.ingredients
    };
    for(let key in disabledInfo) {
      disabledInfo[key] = (disabledInfo[key] <= 0);
    }

    const orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        price={this.state.totalPrice}
        purchaseCanceled={this.purchaseCancelHandler}
        // purchaseContinue={this.purchaseContinueHandler}
        purchaseContinue={this.purchaseContinueToCheckoutHandler}
      />
    );

    const burger = (
      <Auxiliary>
        <Burger
          ingredients={this.state.ingredients}
        />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </Auxiliary>
    );

    const error = (
      <Error
        retry={this.ingredientsRetryHandler}
        text='Error loading data'
        >
      </Error>
    );

    return (
      <Auxiliary>
        {/* <Backdrop show={this.state.purchasing}>
        </Backdrop> */}
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
          >
          {this.state.loading || !this.state.ingredients
            ? <Spinner />
            : orderSummary}
        </Modal>
        {this.state.error
          ? error
          : (!this.state.ingredients
              ? <Spinner />
              : burger)}
      </Auxiliary>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);