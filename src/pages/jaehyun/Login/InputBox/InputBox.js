import React from 'react';

class InputBox extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    const { name, type, placeholder, recivedValue } = this.props;
    return (
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={recivedValue}
      />
    );
  }
}

export default InputBox;
