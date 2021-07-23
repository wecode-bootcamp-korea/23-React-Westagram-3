import React from 'react';
import './KayoungMain.scss';
import Nav from '../../../components/Nav/Nav';

class KayoungMain extends React.Component {
  render() {
    return (
      <div className="mainWrapper">
        <Nav />
        {/* <header className="headerMenuContainer">
          <h1>Westagram logo</h1>
          <div className="headerGroup">
            <div className="headerContent">
              <a herf="./main.html">
                <strong>Westagram</strong>
              </a>
            </div>
            <div className="inputGroup">
              <input type="text" placeholder="검색" />
              <i className="fas fa-search"></i>
            </div>
            <nav>
              <h1>Navigation</h1>
              <ul>
                <li>
                  <a href="#">
                    <img
                      src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                      alt="Search icon"
                      className="naviIcon"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                      alt="Likes me list icon"
                      className="naviIcon"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                      alt="My page icon"
                      className="naviIcon"
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header> */}
        <main>
          <article>
            <div className="articleContainer">
              <header className="feedProfileContainer">
                <div className="userProfile">
                  <img
                    alt="Profile image"
                    src="./images/kayoung/feed-profile.jpeg"
                  />
                  <strong>canon_mj</strong>
                </div>
                <div>
                  <button type="button">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>
              </header>
              <div className="feedImage">
                <img alt="Feed image" src="./images/kayoung/feed-image.jpg" />
              </div>
              <section>
                <h1>Comment box</h1>
                <div className="commentGroup">
                  <div className="commentButtonIcon">
                    <div className="iconGroup">
                      <button type="button">
                        <img
                          className="icon-react"
                          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                          alt="heart"
                        />
                      </button>
                      <button type="button">
                        <img
                          className="icon-react"
                          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                          alt="comment"
                        />
                      </button>
                      <button type="button">
                        <img
                          className="icon-react"
                          src="./images/kayoung/dm.png"
                          alt="DM"
                        />
                      </button>
                    </div>
                    <button type="button">
                      <img
                        className="icon-react"
                        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                        alt="Bookmark"
                      />
                    </button>
                  </div>
                  <div className="likedComment">
                    <img
                      alt="latest replier profile"
                      src="./images/kayoung/reply-profile.jpg"
                      className="profileImage"
                    />
                    <p>
                      <strong>aineworld</strong>님
                      <strong>외 10명이 좋아합니다</strong>
                    </p>
                  </div>
                  <ul id="replyList">
                    <li>
                      <span className="name">canon_mj</span>
                      <span className="titlespan">
                        한가롭게 수영하며 커피 마시고 싶다...
                      </span>
                    </li>
                  </ul>
                  <form className="replyForm" method="POST">
                    <input
                      type="text"
                      placeholder="댓글 달기"
                      id="replyInput"
                    />
                    <button type="submit" id="replyButton">
                      게시
                    </button>
                  </form>
                </div>
              </section>
            </div>
          </article>
        </main>
        <aside>
          <div className="mainRightWrap">
            <div className="myProfileImage">
              <img
                alt="My profile image"
                src="./images/kayoung/my-profile.png"
              />
              <div className="myProfileContent">
                <strong>Kykim</strong>
                <span className="descSpan">FE개발자</span>
              </div>
            </div>
            <div className="recommendWrap">
              <div className="recommendTitle">
                <strong>회원님을 위한 추천</strong>
                <span className="findAll">모두 보기</span>
              </div>
              <ul className="recommendLists">
                <li>
                  <div className="recommendContainer">
                    <div className="effectWrap">
                      <img
                        alt="Recommended accounts profile"
                        src="./images/kayoung/rec-image-1.jpg"
                        className="profileImage"
                      />
                    </div>
                    <div className="recommendContent">
                      <span className="titleSpan">joaaaaaahye</span>
                      <span className="descSpan">회원님을 위한 추천</span>
                    </div>
                  </div>
                  <button type="button" className="statusButton">
                    팔로우
                  </button>
                </li>
                <li>
                  <div className="recommendContainer">
                    <div className="effectWrap">
                      <img
                        alt="Recommended accounts profile"
                        src="./images/kayoung/rec-image-2.jpg"
                        className="profileImage"
                      />
                    </div>
                    <div className="recommendContent">
                      <span className="titleSpan">rampart81</span>
                      <span className="descSpan">회원님을 위한 추천</span>
                    </div>
                  </div>
                  <button type="button" className="statusButton">
                    팔로우
                  </button>
                </li>
                <li>
                  <div className="recommendContainer">
                    <div className="effectWrap">
                      <img
                        alt="Recommended accounts profile"
                        src="./images/kayoung/rec-image-3.jpg"
                        className="profileImage"
                      />
                    </div>
                    <div className="recommendContent">
                      <span className="titleSpan">shawnjjoo</span>
                      <span className="descSpan">회원님을 팔로우 합니다</span>
                    </div>
                  </div>
                  <button type="button" className="statusButton">
                    팔로우
                  </button>
                </li>
                <li>
                  <div className="recommendContainer">
                    <div className="effectWrap">
                      <img
                        alt="Recommended accounts profile"
                        src="./images/kayoung/rec-image-4.jpg"
                        className="profileImage"
                      />
                    </div>
                    <div className="recommendContent">
                      <span className="titleSpan">yongdalKim</span>
                      <span className="descSpan">회원님을 팔로우 합니다</span>
                    </div>
                  </div>
                  <button type="button" className="statusButton">
                    팔로우
                  </button>
                </li>
              </ul>
            </div>
            <footer>
              <div className="footerWrap">
                <ul className="footerList">
                  <li className="footerListItem">
                    <a href="" target="_blank">
                      소개 ·
                    </a>
                  </li>
                  <li className="footerListItem">
                    <a href="" target="_blank">
                      홍보 센터 ·
                    </a>
                  </li>
                  <li className="footerListItem">
                    <a href="" target="_blank">
                      API ·
                    </a>
                  </li>
                  <li className="footerListItem">
                    <a href="" target="_blank">
                      채용 정보 ·
                    </a>
                  </li>
                  <li className="footerListItem">
                    <a href="" target="_blank">
                      개인정보처리방침 ·
                    </a>
                  </li>
                  <li className="footerListItem">
                    <a href="" target="_blank">
                      약관 ·
                    </a>
                  </li>
                  <li className="footerListItem">
                    <a href="" target="_blank">
                      디렉터리 ·
                    </a>
                  </li>
                  <li className="footerListItem">
                    <a href="" target="_blank">
                      프로필 ·
                    </a>
                  </li>
                  <li className="footerListItem">
                    <a href="" target="_blank">
                      해시태그 ·
                    </a>
                  </li>
                  <li className="footerListItem">
                    <a href="" target="_blank">
                      언어 ·
                    </a>
                  </li>
                </ul>
                <span>© 2021 INSTAGRAM FROM FACEBOOK</span>
              </div>
            </footer>
          </div>
        </aside>
      </div>
    );
  }
}

export default KayoungMain;
