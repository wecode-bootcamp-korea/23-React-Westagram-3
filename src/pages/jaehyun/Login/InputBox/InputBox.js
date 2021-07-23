import React from 'react';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
  }
  inputHandler = e => {
    this.props.onchange(e.target.name, e.target.value);
    console.log(e.target.name, e.target.value);
  };
  render() {
    return (
      <input
        name={this.props.name}
        type={this.props.type}
        placeholder={this.props.placeholder}
        onChange={this.inputHandler}
      />
    );
  }
}

export default InputBox;
