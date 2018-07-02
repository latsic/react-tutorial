
import React, {Component} from 'react';

import { connect } from 'react-redux';

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

import {
  addIngredient,
  removeIngredient,
  setIngredients,
  initIngredients,
  purchaseInit } from '../../store/actions/index';

// import Backdrop from '../../components/UI/Backdrop/Backdrop';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {

  state = {
    //ingredients: null,
    //totalPrice: 4,
    //purchasable: false,
    purchasing: false,
    //loading: false,
    //error: false
  }

  // loadIngredients(
  //   url = '/ingredients.json') {

  //   this.setState({
  //     error: false
  //   });
  
  //   axios.get(url)
  //   .then(response => {

  //     this.props.setIngredients(response.data);
  //     // this.setState({
  //     //   ingredients: response.data,
  //     // });
  //     //this.updatePurchaseState(this.props.ingredients);
  //     //this.updatePurchaseState(this.state.ingredients);
  //   })
  //   .catch(error => {
  //     console.log('catched error', error);
  //     this.setState({
  //       error: true
  //     });
  //   });
  // }

  componentDidMount() {
    this.props.initIngredients('/ingredients.json');
    //this.loadIngredients('/ingredients.json');
  }

  ingredientsRetryHandler = () => {
    this.props.initIngredients();
    //this.loadIngredients();
  }

  getPurchaseState(ingredients) {

    if(!ingredients) {
      return false;
    }

    const sum = Object.keys(ingredients)
      .reduce((sum, item) => sum + ingredients[item], 0);
    

    return sum > 0;

    // this.setState({
    //   purchasable: sum > 0
    // });
  }

  addIngredientHandler = (type) => {

    this.props.onIngredientAdded(type, INGREDIENT_PRICES[type]);

    // const oldCount = this.state.ingredients[type];
    // const updatedCount = oldCount + 1;
    
    // const updatedIngredients = {
    //   ...this.state.ingredients,
    // };
    
    // updatedIngredients[type] = updatedCount;

    // const priceAddtion = INGREDIENT_PRICES[type];
    // const oldPrice = this.state.totalPrice;
    // const newPrice = oldPrice + priceAddtion;

    // this.setState({
    //   totalPrice: newPrice,
    //   ingredients: updatedIngredients
    // });
    //console.log('ingredients', this.props.ingredients);
    //this.updatePurchaseState(this.props.ingredients);
    //this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {


    this.props.onIngredientRemoved(type, INGREDIENT_PRICES[type]);

    // const oldIngredientCount = this.state.ingredients[type];
    // if(oldIngredientCount <= 0) {
    //   return;
    // }

    // const updatedIngredients = {
    //   ...this.state.ingredients
    // };
    
    // const newIngredientCount = oldIngredientCount - 1;
    // updatedIngredients[type] = newIngredientCount;
    // const priceReduction = INGREDIENT_PRICES[type];
    // const oldPrice = this.state.totalPrice;
    // const newPrice = oldPrice - priceReduction;
     
    // this.setState({
    //   ingredients: updatedIngredients,
    //   totalPrice: newPrice
    // });

    //this.updatePurchaseState(this.props.ingredients);

    // this.updatePurchaseState(updatedIngredients);
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
    this.props.onInitPurchase();
    this.props.history.push({
      pathname: '/checkout'
    });

    // let qs = `?` +
    //         `salad=${this.state.ingredients.salad}&` +
    //         `bacon=${this.state.ingredients.bacon}&` +
    //         `cheese=${this.state.ingredients.cheese}&` +
    //         `meat=${this.state.ingredients.meat}`;
    
    // const queryParams = [];
    // for(let i in this.props.ingredients) {
    //     queryParams.push(
    //         encodeURIComponent(i)
    //       + '='
    //       + encodeURIComponent(this.props.ingredients[i]));
    // }
    // queryParams.push('price=' + this.props.totalPrice);
    // const queryString = '?' + queryParams.join('&');

    // this.props.history.push({
    //   pathname: '/checkout',
    //   search: queryString
    // });
    // const queryParams = [];
    // for(let i in this.state.ingredients) {
    //     queryParams.push(
    //         encodeURIComponent(i)
    //       + '='
    //       + encodeURIComponent(this.state.ingredients[i]));
    // }
    // queryParams.push('price=' + this.state.totalPrice);
    // const queryString = '?' + queryParams.join('&');

    // this.props.history.push({
    //   pathname: '/checkout',
    //   search: queryString
    // });
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
      ...this.props.ingredients
    };
    for(let key in disabledInfo) {
      disabledInfo[key] = (disabledInfo[key] <= 0);
    }

    const orderSummary = (
      <OrderSummary
        ingredients={this.props.ingredients}
        price={this.props.totalPrice}
        purchaseCanceled={this.purchaseCancelHandler}
        // purchaseContinue={this.purchaseContinueHandler}
        purchaseContinue={this.purchaseContinueToCheckoutHandler}
      />
    );

    const burger = (
      <Auxiliary>
        <Burger
          ingredients={this.props.ingredients}
        />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          //ingredientAdded={(type) => this.props.onIngredientAdded(type, INGREDIENT_PRICES[type])}
          //ingredientRemoved={(type) => this.props.onIngredientRemoved(type, INGREDIENT_PRICES[type])}
          disabledInfo={disabledInfo}
          price={this.props.totalPrice}
          //purchasable={this.state.purchasable}
          purchasable={this.getPurchaseState(this.props.ingredients)}
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
          {!this.props.ingredients
            ? <Spinner />
            : orderSummary}
        </Modal>
        {this.props.error
          ? error
          : (!this.props.ingredients
              ? <Spinner />
              : burger)}
      </Auxiliary>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.burgerReducer.ingredients,
    totalPrice: state.burgerReducer.totalPrice,
    error: state.burgerReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingredientName, price) => dispatch(
      addIngredient(ingredientName, price)),
    onIngredientRemoved: (ingredientName, price) => dispatch(
      removeIngredient(ingredientName, price)),
    setIngredients: (ingredients) => dispatch(
      setIngredients(ingredients)),
    initIngredients: (url) => dispatch(
      initIngredients(url)),
    onInitPurchase: () => dispatch(
      purchaseInit())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));

// export default withErrorHandler(
//     connect(
//       mapStateToProps,
//       mapDispatchToProps)(BurgerBuilder),
//     axios);