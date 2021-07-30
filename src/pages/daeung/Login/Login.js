import React from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';

class InputBoxDiv extends React.Component {
  sendInfo = e => {
    this.props.onChange(e.target.id, e.target.value);
  };

  render() {
    return (
      <div className={this.props.divClass}>
        <input
          className={this.props.inputClass}
          id={this.props.id}
          placeholder={this.props.placeholder}
          type={this.props.type}
          onChange={this.sendInfo}
        />
      </div>
    );
  }
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      bgColor: '#C0DFFD',
      cursorChange: 'Default',
    };
  }

  goToMain = () => {
    const getId = this.state.id;
    const getPw = this.state.pw;

    console.log(getId + 'goToMain');

    fetch('http://10.58.3.116:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: getId,
        password: getPw,
        name: 'daeung3',
        phone_number: '01011111113',
        birthday: '1993-06-03',
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.access_token) {
          console.log('성공');
          this.props.history.push('/DaeungMain');
        }
      });

    // return getId && getPw && getId.indexOf('@') !== -1 && getPw.length > 4
    //   ? this.props.history.push('/DaeungMain')
    //   : alert('아이디와 비밀번호 확인하세요');
    // this.props.history.push('/DaeungMain');
  };

  handleLogin = (name, value) => {
    this.setState({
      [name]: value,
    });
    console.log('여기서도??' + this.state);
    if (name === 'id') {
      return this.state.id.indexOf('@') !== -1 && this.state.pw.length > 4
        ? this.setState({
            bgColor: '#0095F6',
            cursorChange: 'pointer',
          })
        : this.setState({
            bgColor: '#C0DFFD',
            cursorChange: 'Default',
          });
    } else if (name === 'pw') {
      return this.state.id.indexOf('@') !== -1 && this.state.pw.length > 4
        ? this.setState({
            bgColor: '#0095F6',
            cursorChange: 'pointer',
          })
        : this.setState({
            bgColor: '#C0DFFD',
            cursorChange: 'Default',
          });
    }
    console.log('여기선?' + this.state);
  };

  render() {
    console.log(this.state);

    return (
      <article id="login">
        <div id="allBox">
          <section className="loginBox">
            <section id="logoBox">
              <div id="logo">westagram</div>
            </section>
            <section className="loginBox">
              <form id="formLogin" action="main.html">
                <InputBoxDiv
                  divClass="inputBox"
                  inputClass="input"
                  id="id"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  type="text"
                  onChange={this.handleLogin}
                />
                <InputBoxDiv
                  divClass="inputBox"
                  inputClass="input"
                  id="pw"
                  placeholder="비밀번호"
                  type="password"
                  onChange={this.handleLogin}
                />
              </form>
              <div className="buttonBox">
                <button
                  className="btnHover"
                  onClick={this.goToMain}
                  id="loginButton"
                  style={{
                    backgroundColor: this.state.bgColor,
                    cursor: this.state.cursorChange,
                  }}
                >
                  로그인
                </button>
              </div>
            </section>
            <section>
              <div id="pwFinder">
                <a href="">비밀번호를 잊으셨나요?</a>
              </div>
            </section>
          </section>
        </div>
      </article>
    );
  }
}

export default withRouter(Login);
