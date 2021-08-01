import React, { Component } from 'react';
import './taekjunMain.scss';

class CommentList extends Component {
  render() {
    return (
      <li className="whoseComment" key={this.props.key}>
        <p className="name">user{this.props.userName}</p>
        <p className="commentContext">{this.props.comment}</p>
        <img
          className="commentHeartImg"
          src="images/taekjun/heart.png"
          alt="heartIcon"
        ></img>
        <p className="commentDelete">ⅹ</p>
      </li>
    );
  }
}

export default CommentList;
