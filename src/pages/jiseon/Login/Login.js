import React from 'react';
import './Login.scss';
import LoginBox from './LoginBox';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: '', pw: '' };
  }

  handleIdInput = e => {
    const idValue = e.target.value;
    this.setState({ id: idValue });
  };
  handlePwInput = e => {
    const pwValue = e.target.value;
    this.setState({ pw: pwValue });
  };

  render() {
    console.log(this.state);
    return (
      <div id="borderBox">
        <h1>westagram</h1>
        <LoginBox
          handleIdInput={this.handleIdInput}
          handlePwInput={this.handlePwInput}
        />
        <a href="#">비밀번호를 잊으셨나요?</a>
      </div>
    );
  }
}

export default Login;
