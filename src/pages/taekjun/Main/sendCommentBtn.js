import React, { Component } from 'react';

class sendCommentBtn extends Component {
  render() {
    return (
      <button type={this.props.btnType} onClick={this.props.pushComment} />
    );
  }
}

export default sendCommentBtn;
