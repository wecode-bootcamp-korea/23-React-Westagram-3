import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  // goToMain = () => {
  //   this.props.history.push('');
  // };

  render() {
    return (
      <div>
        <div className="flexBox">
          <div className="loginContainer">
            <h1 className="login logo">Westagram</h1>
            <div className="userInfoContainer">
              <div className="loginBtnContainer">
                <input
                  className="loginId"
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                />
                <input
                  className="loginPassword"
                  type="password"
                  placeholder="비밀번호"
                />
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
