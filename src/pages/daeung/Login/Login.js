import React from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';

class InputBoxDiv extends React.Component {
  render() {
    return (
      <div className={this.props.divClass}>
        <input
          className={this.props.inputClass}
          id={this.props.id}
          placeholder={this.props.placeholder}
          type={this.props.type}
          onChange={this.props.onChange}
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

    return getId && getPw && getId.indexOf('@') !== -1 && getPw.length >= 5
      ? this.props.history.push('/DaeungMain')
      : alert('아이디와 비밀번호 확인하세요');
    // this.props.history.push('/DaeungMain');
  };

  handleIdInput = e => {
    const id = e.target.value;
    this.setState({
      id: id,
    });
    const getPw = this.state.pw;

    return id && getPw && id.indexOf('@') !== -1 && getPw.length >= 5
      ? this.setState({
          bgColor: '#0095F6',
          cursorChange: 'pointer',
        })
      : this.setState({
          bgColor: '#C0DFFD',
          cursorChange: 'Default',
        });
  };

  handlePwInput = e => {
    const pw = e.target.value;
    this.setState({
      pw: pw,
    });
    const getId = this.state.id;

    return getId && pw && getId.indexOf('@') !== -1 && pw.length >= 5
      ? this.setState({
          bgColor: '#0095F6',
          cursorChange: 'pointer',
        })
      : this.setState({
          bgColor: '#C0DFFD',
          cursorChange: 'Default',
        });
  };
  loginCheck = () => {
    const getId = this.state.id;
    const getPw = this.state.pw;

    return getId && getPw && getId.indexOf('@') !== -1 && getPw.length >= 5
      ? this.setState({
          cursorChange: 'pointer',
        })
      : this.setState({
          cursorChange: 'Default',
        });
  };

  render() {
    console.log(this.state.id);
    console.log(this.state.pw);
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
                  onChange={this.handleIdInput}
                />
                <InputBoxDiv
                  divClass="inputBox"
                  inputClass="input"
                  id="pw"
                  placeholder="비밀번호"
                  type="password"
                  onChange={this.handlePwInput}
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
