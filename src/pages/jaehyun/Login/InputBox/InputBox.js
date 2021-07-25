import React from 'react';

class InputBox extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  // inputHandler = e => {
  //   const { name, value } = e.target;
  //   this.props.recivedValue(name, value, this.inputValidation(name, value));
  // };

  // inputValidation(name, value) {
  //   let disable;
  //   if (name === 'userName') {
  //     disable = value.indexOf('@') ? false : true;
  //     return disable;
  //   } else if (name === 'password') {
  //     disable = value.length > 5 ? false : true;
  //     return disable;
  //   }
  // }

  render() {
    return (
      <input
        name={this.props.name}
        type={this.props.type}
        placeholder={this.props.placeholder}
        onChange={this.props.recivedValue}
      />
    );
  }
}

export default InputBox;
