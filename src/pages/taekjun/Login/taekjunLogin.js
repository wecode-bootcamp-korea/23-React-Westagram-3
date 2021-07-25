import React from 'react';
import { Link } from 'react-router-dom';
import InputBox from './InputBox';
import './taekjunLogin.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idInput: {
        name: 'id',
        type: 'text',
        placeholder: '전화번호, 사용자 이름 또는 이메일',
      },
      pwInput: {
        name: 'pw',
        type: 'password',
        placeholder: '비밀번호',
      },
      idValidation: false,
      pwValidation: false,
    };
  }

  validationCheck = (name, value) => {
    this.setState({
      [name]: value,
      validationMode:
        name === 'id'
          ? (this.validationMode = 'idCheck')
          : (this.validationMode = 'pwCheck'),
      idValidation:
        this.validationMode === 'idCheck'
          ? !!(value.indexOf('@') + 1)
            ? (this.idValidation = true)
            : (this.idValidation = false)
          : this.idValidation
          ? (this.idValidation = true)
          : (this.idValidation = false),
      pwValidation:
        this.validationMode !== 'idCheck'
          ? value.length > 4
            ? (this.pwValidation = true)
            : (this.pwValidation = false)
          : this.pwValidation
          ? (this.pwValidation = true)
          : (this.pwValidation = false),
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
                <InputBox
                  data={this.state.idInput}
                  transferNameValue={this.validationCheck}
                />
                <InputBox
                  data={this.state.pwInput}
                  transferNameValue={this.validationCheck}
                />
                <Link to="/taekjunMain">
                  <button
                    className="loginButton"
                    style={
                      this.idValidation && this.pwValidation
                        ? { opacity: '100%' }
                        : { opacity: '50%' }
                    }
                  >
                    로그인
                  </button>
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
