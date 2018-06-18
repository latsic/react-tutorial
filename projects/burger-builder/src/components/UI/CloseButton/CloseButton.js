
import React from 'react';
import classes from './CloseButton.css';

const closeButton = (props) => {

  return (
    <div
      className={classes.CloseButton}
      onClick={props.clicked}
      >
      <svg
        className={classes.CloseButtonSVG}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        >
        <line
          className={classes.Line}
          x1="10"
          y1="10"
          x2="90"
          y2="90"
          >
        </line>
        <line
          className={classes.Line}
          x1="90"
          y1="10"
          x2="10"
          y2="90"
        >
        </line>
      </svg>
    </div>
  );
};

export default closeButton;