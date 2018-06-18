
import React from 'react';

import Button from '../../UI/Button/Button';

import classes from './Error.css';

const error = (props) => {
  return (
    <div className={classes.Error}>
      <p>
        {props.text}
      </p>
      <Button
        className={classes.Button}
        clicked={props.retry}
        btnType='Action'
        >
        Click to Retry!
      </Button>
    </div>
  );
}

export default error;
