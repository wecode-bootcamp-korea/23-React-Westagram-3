import React from 'react';
import { withRouter } from 'react-router-dom';
import InputBox from './InputBox/InputBox';
import './JaehyunLogin.scss';

class JaehyunLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: '',
    };
  }

  inputChangeHandler = e => {
    const { name, value } = e.target;
    let userIdCheck = true;
    if (name === 'userName') {
      this.setState({
        userName: value,
      });
      userIdCheck = value.indexOf('@') === -1;
    }
    if (name === 'password') {
      let passwordCheck = true;
      this.setState({
        password: value,
      });
      passwordCheck = value.length < 5;
    }
  };

  goToMain = e => {
    e.preventDefault();
    fetch('http://10.58.0.158:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.userName,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));

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
            recivedValue={this.inputChangeHandler}
          />
          <InputBox
            name="password"
            type="password"
            placeholder="비밀번호"
            recivedValue={this.inputChangeHandler}
          />
          <button
            id="loginButton"
            onClick={this.goToMain}
            disabled={this.userIdCheck || this.passwordCheck}
            style={
              this.userIdCheck || this.passwordCheck
                ? { opacity: '10%' }
                : { opacity: '100%' }
            }
          >
            로그인
          </button>
        </form>
        <h3 className="passwordText">비밀번호를 잊으셨나요?</h3>
      </main>
    );
  }
}

export default withRouter(JaehyunLogin);
