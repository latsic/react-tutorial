
import React from 'react'

import './CharComponent.css'

const charComponent = (props) => {
  
  const myStyle = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black',
    cursor: 'pointer',
    backgroundColor: '#ffff00'

  };


  return (
    <div
      style={myStyle}
      onClick={props.clicked}
      >
      <p>
        {props.letter}
      </p>
    </div>

  );
  
};

export default charComponent;