import React from 'react';
import { Link } from 'react-router-dom';
import InputUserInfo from './InputUserInfo';
import './taekjunLogin.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleUserInfo = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className="flexBox">
          <div className="loginContainer">
            <h1 className="login logo">Westagram</h1>
            <div className="userInfoContainer">
              <div className="loginBtnContainer">
                <InputUserInfo handleUserInfo={this.handleUserInfo} />
                <Link to="/taekjunMain">
                  <button className="loginButton">로그인</button>
                </Link>
              </div>
              <a className="findPassword">비밀번호를 잊으셨나요?</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
