import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {

  state = {
    userName: 'UserName1'
  };

  


  render() {

    this.anotherMethod();
    this.anotherMethod2();

    return (
      
      <div>

        <UserInput
          userNameChange={this.userNameChangeHandler}
          userName={this.state.userName}
          >
        </UserInput>
        
        <hr/>

        <UserOutput
          userName={this.state.userName}
          >
        </UserOutput>
        <UserOutput userName='UserName2'></UserOutput>
        <UserOutput userName='UserName3'></UserOutput>
        <UserOutput userName='UserName4'></UserOutput>
      </div>
    );
  }

  anotherMethod = () => {
    console.log("aha");
  };

  anotherMethod2 = function() {
    console.log("aha2");
  }

  userNameChangeHandler = (event) => {

    this.setState({
      userName: event.target.value
    });
  };
}

export default App;
