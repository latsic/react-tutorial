
import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css'

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';

//import Hamburger from '../../UI/Hamburger/Hamburger'
import Hamburger2 from '../../UI/Hamburger2/Hamburger2'

const sideDrawer = (props) => {

  console.log(props.open);

  return (

    <Auxiliary>
      <Backdrop
        show={props.open}
        clicked={props.closed}
        >
      </Backdrop>
      <div
        className={
          [classes.SideDrawer,
           props.open ? classes.Open : classes.Close
          ].join(' ')}
        >

        <div
          className={classes.Header}
          >
          <div
            className={classes.Logo}
            >
            <Logo />
          </div>
          {/* <div
            className={classes.Hamburger}
            >
            <Hamburger
              isOpen={props.open}
              clicked={props.closed}
            >
            </Hamburger>
          </div> */}
          <div
            className={classes.Hamburger2}
            >
            <Hamburger2
              isOpen={props.open}
              clicked={props.closed}
            >
            </Hamburger2>
          </div>
        </div>

        <nav>
          <NavigationItems>
          </NavigationItems>
        </nav>

      </div>

    </Auxiliary>

  );
}

export default sideDrawer;