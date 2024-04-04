import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 3,
  };

  render() {
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <div>
          {this.props.options.map(({ label, color }, index) => {
            const optionClasses = ['ColorPicker__option'];

            if (index === this.state.activeOptionIdx) {
              optionClasses.push('ColorPicker__option--active');
            }

            return (
              <button
                key={label}
                className={optionClasses.join(' ')}
                style={{
                  backgroundColor: color,
                }}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
