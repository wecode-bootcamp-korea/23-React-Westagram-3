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
      userIdCheck: true,
      passwordCheck: true,
    };
  }

  // inputChangeHandler = (name, value, disable) => {
  //   this.setState({
  //     [name]: value,
  //     [name === 'userName' ? 'userIdCheck' : 'passwordCheck']: disable,
  //   });
  // };

  inputChangeHandler = e => {
    const { name, value } = e.target;
    if (name === 'userName') {
      this.setState({
        userName: value,
        userIdCheck: value.indexOf('@') === -1,
      });
      console.log('ㅇㅏ이디', this.state.userIdCheck);
    }
    if (name === 'password') {
      this.setState({
        password: value,
        passwordCheck: value.length < 5,
      });
      console.log('비밀번호', this.state.passwordCheck);
    }
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
            disabled={this.state.userIdCheck || this.state.passwordCheck}
            style={
              this.state.userIdCheck || this.state.passwordCheck
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
