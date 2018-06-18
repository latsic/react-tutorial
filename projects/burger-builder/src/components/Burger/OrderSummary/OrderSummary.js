import React, {Component} from 'react';

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

import classes from './OrderSummary.css';

class OrderSummary extends Component {
  // Could as well be a functional component!
  componentWillUpdate() {
    console.log('[Order Summary] Will Update');
  }


  render() {

    let items = [];
    let index = 0;
    for(let igKey of Object.keys(this.props.ingredients)) {
      items.push(
        <li
          key={igKey + index}
          >
          <span
            style={{textTransform: 'capitalize'}}
            >
            {igKey}
          </span>
          : {this.props.ingredients[igKey]}
        </li>
      );
      index++;
    }
  

    return (
      <Auxiliary>
        <div
          // className={classes.OrderSummary}
          >
          <h3>Your Order</h3>
          <p className={classes.testClass}> A delicious burger with the following ingredients:</p>
          <ul>
            {items}
          </ul>
          <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
          <p>Continue to Checkout?</p>
          <Button
            btnType={'Danger'}
            clicked={this.props.purchaseCanceled}
            >
            CANCEL
          </Button>
          <Button
            btnType={'Success'}
            clicked={this.props.purchaseContinue}
            >
            CONTINUE
          </Button>
        >
        </div>
      </Auxiliary>

    );
  }
};

export default OrderSummary;