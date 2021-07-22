import React from 'react';
import './Login.scss';
import Loginbtn from './Loginbtn';

class Login extends React.Component {
  render() {
    return (
      <div id="borderBox">
        <h1>westagram</h1>
        <div className="loginBox">
          <input
            className="userName"
            type="text"
            placeholder=" 전화번호, 사용자 이름 또는 이메일"
          />
          <input className="passWord" type="password" placeholder=" 비밀번호" />
          <Loginbtn />
        </div>
        <a href="#">비밀번호를 잊으셨나요?</a>
      </div>
    );
  }
}

export default Login;
