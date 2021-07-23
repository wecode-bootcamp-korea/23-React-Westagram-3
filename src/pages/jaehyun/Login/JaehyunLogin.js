import React from 'react';
import { withRouter } from 'react-router-dom';
import './JaehyunLogin.scss';
import InputBox from './InputBox/InputBox';

class JaehyunLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: '',
    };
  }

  inputChangeHandler = (name, value) => {
    this.setState({ [name]: value });
    console.log('현재 state value', this.state);
  };

  goToMain = () => {
    this.props.history.push('./JaehyunMain');
  };

  render() {
    return (
      <main className="container">
        <div className="titleText">Westagram</div>
        <form action="summit">
          <InputBox
            name="userName"
            type="email"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onchange={this.inputChangeHandler}
          />
          <InputBox
            name="password"
            type="password"
            placeholder="비밀번호"
            onchange={this.inputChangeHandler}
          />
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
