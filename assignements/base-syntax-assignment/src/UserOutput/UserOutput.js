
import React from 'react';

import './UserOutput.css'

const userOutput = (props) => {


  const myStyle = {
    backgroundColor: '#aaaaaa',
    paddingLeft: '20px'
  }

  return (
    <div
      className='UserOutput'
      style={myStyle}
      >
      <p>
        Username: {props.userName}, Some Paragraph 1 text
      </p>
      <p>
        Some Paragraph 2 text
      </p>
    </div>
  );
}

export default userOutput;