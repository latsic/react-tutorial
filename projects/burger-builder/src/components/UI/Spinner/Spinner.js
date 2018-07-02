
import React from 'react';

import classes from './Spinner.css'

const spinner = (props) => {

  const fontSize = props.fontSize
    ? props.fontSize
    : '90px';

  return (
    <div
      className={classes.Loader}
      style={{
        fontSize: fontSize
      }}
      >
      Loading...
    </div>
  );
};

export default spinner;