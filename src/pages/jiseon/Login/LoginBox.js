import React from 'react';
import './Login.scss';
import Loginbtn from './Loginbtn';

class LoginBox extends React.Component {
  render() {
    return (
      <div className="loginBox">
        <input
          onChange={this.props.handleIdInput}
          className="userName"
          type="text"
          placeholder=" 전화번호, 사용자 이름 또는 이메일"
        />
        <input
          onChange={this.props.handlePwInput}
          className="passWord"
          type="password"
          placeholder=" 비밀번호"
        />
        <Loginbtn />
      </div>
    );
  }
}

export default LoginBox;
