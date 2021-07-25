import React, { Component } from 'react';

class InputBox extends Component {
  constructor() {
    super();
  }

  giveValueToParent = e => {
    const { name, value } = e.target;
    this.props.transferNameValue(name, value);
  };

  render() {
    return (
      <>
        <input
          name={this.props.data.name}
          type={this.props.data.type}
          placeholder={this.props.data.placeholder}
          onChange={this.giveValueToParent}
        />
      </>
    );
  }
}

export default InputBox;
