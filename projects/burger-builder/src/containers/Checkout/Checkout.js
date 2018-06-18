import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

import ContactData from './ContactData/ContactData';

class Checkout extends Component {

  state = {
    ingredients: null,
    totalPrice: 0
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data')
  }

  componentWillMount() {

    console.log('Checkout DidMount');

    this.setState({
      ingredients: this.getIngredients(),
      totalPrice: this.getPrice()
    });

    // const searchParams = new URLSearchParams(this.props.location.search);
    
    // this.setState({
    //   ingredients: {
    //     salad: searchParams.has('salad') ? searchParams.get('salad') : 0,
    //     bacon: searchParams.has('bacon') ? searchParams.get('bacon') : 0,
    //     cheese: searchParams.has('cheese') ? searchParams.get('cheese') : 0,
    //     meat: searchParams.has('meat') ? searchParams.get('meat') : 0
    //   }
    // });
  }

  getIngredients() {

    const searchParams = new URLSearchParams(this.props.location.search);

    let ingredients = {};
    for(let param of searchParams.entries()) {

      if(param[0] !== 'price') {
        ingredients[param[0]] = +param[1];
      }
    }

    return ingredients;

    // return  {
    //   salad: searchParams.has('salad') ? +searchParams.get('salad') : 0,
    //   bacon: searchParams.has('bacon') ? +searchParams.get('bacon') : 0,
    //   cheese: searchParams.has('cheese') ? +searchParams.get('cheese') : 0,
    //   meat: searchParams.has('meat') ? +searchParams.get('meat') : 0
    // };
  }

  getPrice() {
    const searchParams = new URLSearchParams(this.props.location.search);
    if(searchParams.has('price')) {
      return searchParams.get('price');
    }
  }

  render() {

    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
          >
        </CheckoutSummary>

        <Route
          path={this.props.match.path + '/contact-data'}
          render={() => {
            return (
              <ContactData
                ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                {...this.props}
                >
              </ContactData>
          )}}
          >
        </Route>

      </div>
    );
  }
}

export default Checkout;