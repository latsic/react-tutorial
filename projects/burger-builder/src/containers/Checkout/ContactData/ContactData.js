
import React, { Component } from 'react';

import { connect } from 'react-redux';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

import axios from '../../../axios-orders';

import Spinner from '../../../components/UI/Spinner/Spinner';

import Input from '../../../components/UI/Input/Input';

import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

import { purchaseBurger } from '../../../store/actions/index';

class ContactData extends Component {

  state = {

    orderForm: {

      name: this.getFormElem('input', 'text', 'Your Name', ''),
      street: this.getFormElem('input', 'text', 'Street', ''),
      zipCode: this.getFormElem('input', 'text', 'Postal Code', ''),      
      country: this.getFormElem('input', 'text', 'Country', ''),
      email: this.getFormElem('input', 'email', 'Your Email', ''),
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [{
              value: 'fastest',
              displayValue: 'Fastest'
            },
            {
              value: 'cheapest',
              displayValue: 'Cheapest'
            }
          ]
        },
        valid: true,
        value: 'fastest',
        validation: {

        }
      }
    },
    formIsValid: false//,
    // loading: false
  };

  constructor() {
    super();
    this.state.orderForm.name.valid = false;
    this.state.orderForm.name.validation = {
      required: true,
      errorMessage: 'This field is required.'
    };
    this.state.orderForm.street.valid = false;
    this.state.orderForm.street.validation = {
      required: true,
      errorMessage: 'This field is required.'
    };
    this.state.orderForm.zipCode.valid = false;
    this.state.orderForm.zipCode.validation = {
      required: true,
      minLength: 5,
      maxLength: 5,
      numeric: true,
      errorMessage: `Please enter a 5 digit zop code.`
    };
    this.state.orderForm.country.valid = false;
    this.state.orderForm.country.validation = {
      required: true,
      errorMessage: 'This field is required.'
    };
    this.state.orderForm.email.valid = false;
    this.state.orderForm.email.validation = {
      required: true,
      email: true,
      errorMessage: 'Please enter a valid email address.'
    };
  }

  getFormElem(elemType, configType, ph, value) {
    return {
      elementType: elemType,
      elementConfig: {
        type: configType,
        placeholder: ph
      },
      value: value,
      touched: false,
      validation:{
      }
    };
  }

  orderHandler = (event) => {
    event.preventDefault();
   
    const formData = {};
    for(let formElemId in this.state.orderForm) {
      formData[formElemId] = this.state.orderForm[formElemId].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      orderData: formData
    };

    this.props.onOrderBurger(order);
  }
  // orderHandler = (event) => {
  //   event.preventDefault();
   
  //   const formData = {};
  //   for(let formElemId in this.state.orderForm) {
  //     formData[formElemId] = this.state.orderForm[formElemId].value;
  //   }

  //   this.setState({
  //     loading: true
  //   });

  //   console.log(this.state)

  //   const order = {
  //     ingredients: this.props.ingredients,
  //     price: this.props.totalPrice,
  //     orderData: formData
  //   };

  //   console.log('order', order);

  //   axios.post('/orders.json', order)
  //   .then(response => {
  //     console.log('/orders.json response', response);
  //     this.setState({
  //       loading: false,
  //       // purchasing: false
  //     });
  //     this.props.history.push('/');
  //   })
  //   .catch((error) => {
  //     console.log('/orders.json error', error);
  //     this.setState({
  //       loading: false,
  //       // purchasing: false
  //     });
  //   });
  // }

  checkValidity(value, rules) {
    
    const validResult = {
      valid: true,
      errorMessage: null
    };

    if(!rules) {
      return validResult;
    }

    if(rules.required && value.trim() === '') {
      return false;
    }
    if(rules.numeric && !/^\d+$/.test(value)){
      return false;
    }
    if(rules.minLength && value.trim().length < rules.minLength) {
      return {
        valid: false,
        errorMessage: rules.errorMessage
      };
    }
    if(rules.maxLength && value.trim().length > rules.maxLength) {
      return {
        valid: false,
        errorMessage: rules.errorMessage
      };
    }
    if(rules.email && !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
      .test(value.toLowerCase())){
        return {
          valid: false,
          errorMessage: rules.errorMessage
        }
    }
    
    return validResult;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    
    const updateOrderForm = {
      ...this.state.orderForm
    };
    const updatedFormElement = {
      ...updateOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    const validCheckResult = 
      this.checkValidity(updatedFormElement.value, updatedFormElement.validation);

    updatedFormElement.valid = validCheckResult.valid;
    updatedFormElement.errorMessage = validCheckResult.errorMessage;
    updatedFormElement.touched = true;
    updateOrderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for(let inputId in updateOrderForm) {
      formIsValid = updateOrderForm[inputId].valid && formIsValid;
    }
    console.log('form is valid', formIsValid);


    this.setState({
      orderForm: updateOrderForm,
      formIsValid: formIsValid
    });
  };

  render() {

    const formElementArray = [];
    for(let key in this.state.orderForm) {
      formElementArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }

    let form =
      <form onSubmit={this.orderHandler}>
        {
          formElementArray.map(formElement => {
            return (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              changed={(event) => this.inputChangedHandler(event, formElement.id)}
              invalid={!formElement.config.valid}
              touched={formElement.config.touched}
              errorMessage={formElement.config.validation.errorMessage}
            />);
          })
        }

        {/* <Input
          elementType="..."
          elementConfig="..."
          value="..."
        />
        

        <Input inputtype="input" type="text" name="name" placeholder="Your name" />
        <Input inputtype="input" type="email" name="name" placeholder="Your email" />
        <Input inputtype="input" type="text" name="street" placeholder="Street" />
        <Input inputtype="input" type="text" name="postal" placeholder="Postal code" /> */}
        <Button
          btnType="Success"
          clicked ={this.orderHandler}
          disabled={!this.state.formIsValid}
          >
          ORDER
        </Button>
      </form>
    if(this.props.loading) {
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

const mapStateToProps = state => ({
  ingredients: state.burgerReducer.ingredients,
  totalPrice: state.burgerReducer.totalPrice,
  loading: state.orderReducer.loading
});

const mapDispatchToProps = dispatch => ({
  onOrderBurger: (order) => dispatch(purchaseBurger(order))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(withErrorHandler(ContactData, axios));