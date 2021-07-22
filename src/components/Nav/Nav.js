import React from 'react';
import { withRouter } from 'react-router';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div className="logoBox">
          <i className="fab fa-instagram"></i>
          <h1 className="logo">westagram</h1>
        </div>
        <div className="searchBox">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="검색" />
        </div>
        <div className="menuBox">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt="탐색"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="하트"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png
                "
            alt="개인페이지"
          />
        </div>
      </nav>
    );
  }
}

export default Nav;
