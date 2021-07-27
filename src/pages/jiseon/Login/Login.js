import React from 'react';
import './Login.scss';
import LoginBox from './LoginBox';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { idCheck: true, pwCheck: true };
  }

  handleIdInput = e => {
    const idValue = e.target.value;
    idValue.indexOf('@')
      ? this.setState({ idCheck: false })
      : this.setState({ idCheck: true });
  };
  handlePwInput = e => {
    const pwValue = e.target.value;
    pwValue.length > 5
      ? this.setState({ pwCheck: false })
      : this.setState({ pwCheck: true });
  };

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
          className="loginBtn"
          style={
            this.state.idCheck || this.state.pwCheck
              ? { backgroundColor: '#c0dffd' }
              : { backgroundColor: '#03376a' }
          }
          onClick={this.goToMain}
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
