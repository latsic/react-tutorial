
import React from 'react';

import classes from './Hamburger2.css'

import PropTypes from 'prop-types';

const hamburger2 = (props) => {

  const lines = [];
  const yStart = 20;

  const lineClasses = [
    classes.HamLine,
    props.isOpen ? classes.Open : ""
  ].join(' ');

  console.log("lineClasses", lineClasses);

  for(let i = 0; i < 3; ++i) {
    lines.push(
      <line
        className={lineClasses}
        x1="10"
        x2="90"
        y1={yStart + i * 30}
        y2={yStart + i * 30}
        key={yStart + i * 30}
        >
      </line>
    )
  }

  return (
    <div
      className={
        classes.Hamburger
      }
      onClick={props.clicked}
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className={classes.HamburgerSVG}
        >
        {lines}
      </svg>
    </div>
  );
};

hamburger2.propTypes = {
  isOpen: PropTypes.bool
}

export default hamburger2;