
import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

import axios from '../../../axios-orders';

import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {

  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    console.log("Contact Data ing", this.props.ingredients);

    this.setState({
      loading: true
    });

    console.log(this.state)

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Test Name',
        address: {
          street: 'Teststreet 27',
          zipCode: '51896',
          country: 'Switzerland'
        },
        email: 'test11@test.com'
      },
      deliveryMethod: 'fastest'
    };

    axios.post('/orders.json', order)
    .then(response => {
      console.log('/orders.json response', response);
      this.setState({
        loading: false,
        // purchasing: false
      });
      this.props.history.push('/');
    })
    .catch((error) => {
      console.log('/orders.json error', error);
      this.setState({
        loading: false,
        // purchasing: false
      });
    });
  }

  render() {

    let form =
      <form>
        <input className={classes.Input} type="text" name="name" placeholder="Your name" />
        <input className={classes.Input} type="email" name="name" placeholder="Your email" />
        <input className={classes.Input} type="text" name="street" placeholder="Street" />
        <input className={classes.Input} type="text" name="postal" placeholder="Postal code" />
        <Button
          btnType="Success"
          clicked ={this.orderHandler}
          >
          ORDER
        </Button>
      </form>
    if(this.state.loading) {
      form = <Spinner />
    }

    return (
      <div
        className={classes.ContactData}
        >
        <h4> Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;