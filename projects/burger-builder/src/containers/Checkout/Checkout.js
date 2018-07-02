import React, { Component } from 'react';

import { Route, Redirect } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

import ContactData from './ContactData/ContactData';

import { connect } from 'react-redux';

//import { purchaseInit} from '../../store/actions/index';

class Checkout extends Component {

  // state = {
  //   ingredients: null,
  //   totalPrice: 0
  // }

  componentWillMount() {
    //this.props.onInitPurchase();
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data')
  }

  // componentWillMount() {

  //   console.log('Checkout DidMount');

  //   this.setState({
  //     ingredients: this.getIngredients(),
  //     totalPrice: this.getPrice()
  //   });

  //   // const searchParams = new URLSearchParams(this.props.location.search);
    
  //   // this.setState({
  //   //   ingredients: {
  //   //     salad: searchParams.has('salad') ? searchParams.get('salad') : 0,
  //   //     bacon: searchParams.has('bacon') ? searchParams.get('bacon') : 0,
  //   //     cheese: searchParams.has('cheese') ? searchParams.get('cheese') : 0,
  //   //     meat: searchParams.has('meat') ? searchParams.get('meat') : 0
  //   //   }
  //   // });
  // }

  // getIngredients() {

  //   const searchParams = new URLSearchParams(this.props.location.search);

  //   let ingredients = {};
  //   for(let param of searchParams.entries()) {

  //     if(param[0] !== 'price') {
  //       ingredients[param[0]] = +param[1];
  //     }
  //   }

  //   return ingredients;

  //   // return  {
  //   //   salad: searchParams.has('salad') ? +searchParams.get('salad') : 0,
  //   //   bacon: searchParams.has('bacon') ? +searchParams.get('bacon') : 0,
  //   //   cheese: searchParams.has('cheese') ? +searchParams.get('cheese') : 0,
  //   //   meat: searchParams.has('meat') ? +searchParams.get('meat') : 0
  //   // };
  // }

  // getPrice() {
  //   const searchParams = new URLSearchParams(this.props.location.search);
  //   if(searchParams.has('price')) {
  //     return searchParams.get('price');
  //   }
  // }

  render() {

    let summary = <Redirect to="/" />
    if(this.props.ingredients && !this.props.purchased) {
      summary = (
        <div>
          <CheckoutSummary
            ingredients={this.props.ingredients}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
            >
          </CheckoutSummary>
          <Route
            path={this.props.match.path + '/contact-data'}
            component={ContactData}
            // render={() => {
            //   return (
            //     <ContactData
            //       ingredients={this.props.ingredients}
            //       price={this.props.totalPrice}
            //       {...this.props}
            //       >
            //     </ContactData>
            // )}}
            >
          </Route>    
      </div>);  
    }

    return summary;
  }
}

const mapStateToProps = (state) => ({
  ingredients: state.burgerReducer.ingredients,
  purchased: state.orderReducer.purchased
});

const mapDispatchToProps = dispatch => ({
  //onInitPurchase: () => dispatch(purchaseInit())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Checkout);