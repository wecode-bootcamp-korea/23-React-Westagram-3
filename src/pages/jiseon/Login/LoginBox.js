import React from 'react';
import './Login.scss';

class LoginBox extends React.Component {
  render() {
    return (
      <div className="loginBox">
        <input
          name="id"
          onChange={this.props.inputHandler}
          className="userName"
          type="text"
          placeholder=" 전화번호, 사용자 이름 또는 이메일"
        />
        <input
          name="password"
          onChange={this.props.inputHandler}
          className="passWord"
          type="password"
          placeholder=" 비밀번호"
        />
      </div>
    );
  }
}

export default LoginBox;
