import React from 'react';

import classes from './Backdrop.css'

const backdrop = (props) => {

  let style = {
    opacity: 0.8,
    pointerEvents: 'auto'
  };
  if(!props.show) {
    style.opacity = 0.0;
    style.pointerEvents = 'none'
  }
  return (
    <div
      className={classes.Backdrop}
      style={style}
      onClick={props.clicked}
      >
    </div>
  );
};

export default backdrop;