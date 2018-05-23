
import React from 'react'

const validation = (props) => {

  const minTextLen = 5;

  const renderP = () => {
    if(props.textLen < minTextLen) {
      return <p>Text too shoort</p>
    }
    return <p>Text long enough</p>;
  };

  return (
    <div>
      { renderP() }
    </div>
  )
};

export default validation;