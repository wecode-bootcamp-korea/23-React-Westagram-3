import React from 'react';
import './Login.scss';
import LoginBox from './LoginBox';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      idCheck: true,
      pwCheck: true,
    };
  }

  handleIdInput = e => {
    const idValue = e.target.value;
    idValue.indexOf('@')
      ? this.setState({ email: idValue, idCheck: false })
      : this.setState({ idCheck: true });
  };

  handlePwInput = e => {
    const pwValue = e.target.value;
    pwValue.length > 5
      ? this.setState({ password: pwValue, pwCheck: false })
      : this.setState({ pwCheck: true });
  };

  // jiseon = e => {
  //   fetch('http://10.58.0.149:8000/users/signup', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: this.state.email,
  //       password: this.state.password,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => console.log('결과', result));
  // };

  goToMain = () => {
    this.props.history.push('/JiseonMain');
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
        <button
          onClick={this.goToMain}
          className="loginBtn"
          style={
            this.state.idCheck || this.state.pwCheck
              ? { backgroundColor: '#c0dffd' }
              : { backgroundColor: '#03376a' }
          }
          disabled={this.state.idCheck || this.state.pwCheck}
        >
          로그인
        </button>
        <a href="#">비밀번호를 잊으셨나요?</a>
      </div>
    );
  }
}

export default withRouter(Login);
