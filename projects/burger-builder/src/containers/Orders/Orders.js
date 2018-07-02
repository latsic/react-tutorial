
import React, {Component} from 'react';
import { connect } from 'react-redux';

import axios from '../../axios-orders';
import Order from '../../components/Order/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import Spinner from './../../components/UI/Spinner/Spinner';

import {
  fetchOrders
} from '../../store/actions/index';

import classes from './Orders.css';

class Orders extends Component {

  // state = {
  //   orders: [],
  //   loading: true
  // };

  componentDidMount() {
    this.props.onFetchOrders();
  }
  // componentDidMount() {

  //   axios.get('orders.json')
  //     .then(res => {

  //       const fetchedOrders = [];
  //       for(let key in res.data) {
  //         fetchedOrders.push({
  //           ...res.data[key],
  //           id: key
  //         });
  //       }

  //       this.setState({
  //         loading: false,
  //         orders: fetchedOrders
  //       });
  //     })
  //     .catch(err => {
  //       this.setState({
  //         loading: false
  //       });
  //     });

  // }

  render() {

    let allOrders = <Spinner fontSize='100px'/>;
    if(!this.props.loading) {
      allOrders = this.props.orders.map(order => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={+order.price}
        />
      ));
    }

    return (
      <div
        className={classes.Orders}
        >
        {allOrders}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.orderReducer.loading,
  orders: state.orderReducer.orders
});

const mapDispatchToProps = dispatch =>({
  onFetchOrders: () => dispatch(
    fetchOrders())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps)(withErrorHandler(Orders, axios));