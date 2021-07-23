import React from 'react';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
  }
  inputHandler = e => {
    const { name, value } = e.target;
    let disable;
    if (name === 'userName') {
      disable = value.indexOf('@') ? false : true;
    } else if (name === 'password') {
      disable = value.length > 5 ? false : true;
    }
    this.props.giveValue(name, value, disable);
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
