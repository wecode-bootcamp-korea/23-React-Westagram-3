import React, { Component } from 'react';

class InputUserInfo extends Component {
  render() {
    return (
      <>
        <input
          className="loginId"
          type="text"
          name="id"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={this.props.handleUserInfo}
        />
        <input
          className="loginPassword"
          type="password"
          name="pw"
          placeholder="비밀번호"
          onChange={this.props.handleUserInfo}
        />
      </>
    );
  }
}

export default InputUserInfo;
