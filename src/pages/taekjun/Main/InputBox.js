import React, { Component } from 'react';

class InputBox extends Component {
  constructor() {
    super();
  }

  giveValueToParent = e => {
    const { value } = e.target;
    this.props.transferValue(value);
  };

  render() {
    return (
      <>
        <input
          name={this.props.data.name}
          value={this.props.comment}
          placeholder={this.props.data.placeholder}
          onChange={this.giveValueToParent}
          onKeyDown={this.props.enterClick}
        />
      </>
    );
  }
}

export default InputBox;
