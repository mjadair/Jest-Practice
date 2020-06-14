import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { throwError } from 'rxjs';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }



  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The count is {this.state.counter}</h1>
        <h1 className="error-message" style={{ display: 'none', color: 'red' }}>YOU CAN'T GO PAST 0</h1>
        <button data-test="increment-button"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}>Increment Button</button>
        <button data-test="decrement-button"
          onClick={() => this.state.counter > 0 ? this.setState({ counter: this.state.counter - 1 }) : document.querySelector('.error-message').style = {display: 'block'}}>Decrement button</button>
      </div >
    )
  }
}

export default App;
