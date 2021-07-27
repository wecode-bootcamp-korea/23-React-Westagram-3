import React from 'react';
import './KayoungMain.scss';

class Comment extends React.Component {
  render() {
    return (
      <li key={this.props.key}>
        <span>{this.props.content}</span>
      </li>
    );
  }
}

export default Comment;
