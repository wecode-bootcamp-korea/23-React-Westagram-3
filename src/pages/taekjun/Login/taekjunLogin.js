import React from 'react';
import './taekjunLogin.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idValidation: false,
      pwValidation: false,
    };
  }

  getValue = e => {
    const { name, value } = e.target;
    if (name === 'id') {
      !(value.indexOf('@') + 1) && this.setState({ idValidation: true });
    }
    if (name === 'pw') {
      value.length > 4 && this.setState({ pwValidation: true });
    }
  };

  aissgnment = () => {
    fetch('http://10.58.1.112:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.idValue,
        password: this.state.pwValue,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과', result));
  };

  render() {
    return (
      <div>
        <div className="flexBox">
          <div className="loginContainer">
            <h1 className="login logo">Westagram</h1>
            <div className="userInfoContainer">
              <div className="loginBtnContainer">
                <input
                  name="id"
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  onChange={this.getValue}
                ></input>
                <input
                  name="pw"
                  type="password"
                  placeholder="비밀번호"
                  onChange={this.getValue}
                ></input>
                <button
                  className="loginButton"
                  style={
                    this.state.idValidation && this.state.pwValidation
                      ? { opacity: '100%' }
                      : { opacity: '50%' }
                  }
                  onClick={this.assignment}
                >
                  로그인
                </button>
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
