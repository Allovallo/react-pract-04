import React, { Component } from 'react';
import Controls from './Controls';
import './Counter.css';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static = {
    // описуємо проптайпи...
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>

        <Controls onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
        {/* <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            Збільшити
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Зменшити
          </button>
        </div> */}
      </div>
    );
  }
}

export default Counter;
