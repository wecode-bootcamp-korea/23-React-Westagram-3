import React from 'react';
import { withRouter } from 'react-router-dom';
import './JaehyunLogin.scss';

class JaehyunLogin extends React.Component {
  goToMain = () => {
    this.props.history.push('./JaehyunMain');
  };

  render() {
    return (
      <main className="container">
        <div className="titleText">Westagram</div>
        <form action="summit">
          <input
            id="userId"
            type="email"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input id="password" type="password" placeholder="비밀번호" />
          <button id="loginButton" onClick={this.goToMain}>
            로그인
          </button>
        </form>
        <h3 className="passwordText">비밀번호를 잊으셨나요?</h3>
      </main>
    );
  }
}

export default withRouter(JaehyunLogin);
