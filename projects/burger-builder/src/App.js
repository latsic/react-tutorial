import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

class App extends Component {
  render() {
    return (
      
      <div className="main-div">
        <Layout>
          <Switch>
            <Route
              path="/checkout"
              component={Checkout}
              >
            </Route>
            <Route
              path="/burger-builder"
              component={BurgerBuilder}
              >
            </Route>
            <Route
              path="/orders"
              component={Orders}
              >
            </Route>
            <Redirect
              from="/"
              to="/burger-builder"
              exact
            />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

//https://react-burger-builder-acce2.firebaseio.com/
