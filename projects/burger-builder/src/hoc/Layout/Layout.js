
import React, { Component} from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    console.log('closing sidedraw');
    
    this.setState({
      showSideDrawer: false
    });
  };

  sideDrawOpenHandler = () => {
    this.setState({
      showSideDrawer: true
    });
  }

  render() {

    return(
      <Auxiliary>
        <SideDrawer
          closed={this.sideDrawerClosedHandler}
          open={this.state.showSideDrawer}
        />
        <div
          className={classes.Page}
          >
          <Toolbar
            menuIsOpen={this.state.showSideDrawer}
            menuClicked={this.sideDrawOpenHandler}
          />
          <main
            className={classes.Content}
            >
            {this.props.children}
          </main>
        </div>
      </Auxiliary>
    );
  }
};

export default Layout;