
import React from 'react';

import classes from './Hamburger.css'

const hamburger = (props) => {

  return (
    <div
      className={
        [classes.Hamburger,
         props.isOpen ? classes.Open : null].join(' ')
      }
      onClick={props.clicked}
      >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default hamburger;