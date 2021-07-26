import React, { Component } from 'react';
import './taekjunMain.scss';

class CommentList extends Component {
  render() {
    return <ul className="commentUploaded">{this.props.data}</ul>;
  }
}

export default CommentList;
