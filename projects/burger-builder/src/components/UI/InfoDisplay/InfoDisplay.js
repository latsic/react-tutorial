

import React from 'react';

import CloseButton from '../CloseButton/CloseButton';
import classes from './InfoDisplay.css';

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

const infoDisplay = (props) => {
  return (
    
    <Auxiliary>
      
      <div
        className={classes.TitleBar}
        >
        <p>{props.title}</p>
        <div
          className={classes.CloseButton}
          >
          <CloseButton
            clicked={props.closeClicked}
          />
        </div>
      </div>
      <div
        className={classes.Content}
        >
        
        <p
          className={classes.DetailText}
          >
          {props.text}
        </p>
      </div>
    </Auxiliary>
  );
};

export default infoDisplay;