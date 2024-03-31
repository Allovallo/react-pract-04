import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  state = {
    value: 5,
  };

  handleIncrement = event => {};

  handleDecrement = event => {};

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>
        <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            Збільшити
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Зменшити
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
