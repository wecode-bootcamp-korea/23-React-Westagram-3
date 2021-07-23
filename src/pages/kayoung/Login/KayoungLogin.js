import React from 'react';
import './KayoungLogin.scss';

class KayoungLogin extends React.Component {
  render() {
    return (
      <section class="loginContainer">
        <h1 className="logo">Westagram</h1>
        <form className="inputGroup">
          <input
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            id="userInfo"
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="input"
            id="userPw"
          />
          <button type="submit" id="inputButton" disabled>
            로그인
          </button>
        </form>
        <a href="" className="notice">
          비밀번호를 잊으셨나요?
        </a>
      </section>
    );
  }
}

export default KayoungLogin;
