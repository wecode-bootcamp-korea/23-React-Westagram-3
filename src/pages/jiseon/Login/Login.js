import React from 'react';
import './Login.scss';
import '../Main/Common.scss';
import LoginBox from './LoginBox';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      password: '',
    };
  }

  inputHandler = e => {
    const name = e.target.name;
    const inputValue = e.target.value;
    this.setState({ [name]: inputValue });
  };

  activeBtn = () => {
    const { id, password } = this.state;
    return id.indexOf('@') !== -1 && password.length >= 5 ? true : false;
  };

  goToMain = () => {
    this.props.history.push('/JiseonMain');
  };

  render() {
    console.log(this.state);
    console.log(this.activeBtn());
    return (
      <div id="borderBox">
        <h1>westagram</h1>
        <LoginBox inputHandler={this.inputHandler} />
        <button
          onClick={this.goToMain}
          className={this.activeBtn() ? 'afterActive' : 'beforeActive'}
        >
          로그인
        </button>
        <a href="#">비밀번호를 잊으셨나요?</a>
      </div>
    );
  }
}

export default withRouter(Login);
