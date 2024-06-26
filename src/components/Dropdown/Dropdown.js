import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  //   show = () => {
  //     this.setState({ visible: true });
  //   };

  //   hide = () => {
  //     this.setState({ visible: false });
  //   };

  render() {
    const { visible } = this.state;

    return (
      <div className="Dropdown">
        <button type="button" className="Dropdown__btn" onClick={this.toggle}>
          {visible ? 'Скрити' : 'Показати'}
        </button>

        {/* <button type="button" className="Dropdown__toggle" onClick={this.hide}>
          Скрити
        </button> */}

        {visible && <div className="Dropdown__menu">Випадаюче меню</div>}
      </div>
    );
  }
}

export default Dropdown;
