import React, { Component } from 'react';
import './taekjunMain.scss';

class RecommendUserList extends Component {
  render() {
    return (
      <li className="user" key={this.props.key}>
        <div className="userContainer">
          <img
            className="userProfileImg"
            src="images/taekjun/user4.jpeg"
            alt="userProfileImage"
          />
          <div className="userInfo">
            <h6>{this.props.userName}</h6>
            <p className="whoIsFollowing">회원님을 팔로우합니다</p>
          </div>
        </div>
        <a href="#">팔로우</a>
      </li>
    );
  }
}

export default RecommendUserList;
