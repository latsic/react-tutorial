import React, { Component } from 'react';
import './App.css';

import Validation from './Validation/Validation';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    inputValue: ''
  };

  inputChangeHandler = (event) => {
    
    this.setState({
      inputValue: event.target.value
    });
  };

  charClickedHandler = (event, index) => {
    console.log('index', index);
    console.log('type', typeof(this.state.inputValue));

    const test = this.state.inputValue;
    const currentInputValue = test.split('');

    //const currentInputValue = this.state.inputValue.split('');
    currentInputValue.splice(index, 1);
    console.log(currentInputValue);
    this.setState({
      inputValue: currentInputValue.join('')
    });
  };

  renderCharComponents = () => {
    
    console.log('test', test);
    const test = this.state.inputValue;
    test.split('');

    const inputArray = this.state.inputValue.split('');
    console.log(inputArray);
    return (
      <div>
      {
        inputArray.map((myChar, index) => {
          return (
            <CharComponent
              letter={myChar}
              key={index}
              clicked={(event) => {this.charClickedHandler(event, index)}}
            >
            </CharComponent>
          );
        })
      }
      </div>
    );
  };

  render() {
    return (
      <div className="App">
        
        <input
          type="text"
          onChange={(event) => this.inputChangeHandler(event)}  
          value={this.state.inputValue}
        />
        <p>
          Input length is currently: {this.state.inputValue.length}
        </p>

        <Validation
          textLen={this.state.inputValue.length}
          >
        </Validation>
        <hr/>
        {this.renderCharComponents()}

        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
