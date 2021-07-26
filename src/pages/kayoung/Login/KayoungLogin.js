import React from 'react';
import { withRouter } from 'react-router';
import './KayoungLogin.scss';

class LoginInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: '',
      userPw: '',
      disabled: true,
    };
  }

  handleIdInput = e => {
    this.setState({
      userInfo: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      userPw: e.target.value,
    });
  };

  goToMain = e => {
    e.preventDefault();
    const email = this.state.userInfo;
    const password = this.state.userPw;
    if (email.includes('@') && password.length >= 5) {
      this.props.history.push('./KayoungMain');
    } else {
      alert('아이디와 비밀번호를 확인해주세요.');
    }
  };

  render() {
    console.log(this.state);
    return (
      <section className="loginContainer">
        <h1 className="logo">Westagram</h1>
        <form className="inputGroup">
          <input
            onChange={this.handleIdInput}
            value={this.state.userInfo}
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            id="userInfo"
          />
          <input
            onChange={this.handlePwInput}
            value={this.state.userPw}
            type="password"
            placeholder="비밀번호"
            className="input"
            id="userPw"
          />
          <button
            type="submit"
            onClick={this.goToMain}
            id="inputButton"
            disabled={
              this.state.userInfo !== 0 && this.state.userPw !== 0
                ? false
                : true
            }
          >
            로그인
          </button>
        </form>
        <a
          href="https://help.instagram.com/409847499070242?helpref=search&sr=2&query=%EB%B9%84%EB%B0%80%EB%B2%88%ED%98%B8%EB%A5%BC%20%EC%9E%8A%EC%9C%BC%EC%85%A8%EB%82%98%EC%9A%94&search_session_id=da14bd7ece736e6ba602e845a3233110"
          target="_blank"
          className="notice"
          rel="noreferrer"
        >
          비밀번호를 잊으셨나요?
        </a>
      </section>
    );
  }
}

export default withRouter(LoginInput);
