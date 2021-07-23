import React from 'react';
import Nav from '../../../components/Nav/Nav';
import { withRouter } from 'react-router';
import './JaehyunMain.scss';

class JaehyunMain extends React.Component {
  render() {
    return (
      <main className="wrap">
        <Nav />
        {/* <nav className="fixedTop">
          <div className="leftContent">
            <p className="westagramTitle">Westagram</p>
          </div>
          <div className="inputContainer">
            <img className="searchIcon" src="/images/search.png" alt="search" />
            <input type="text" className="searchInput" />
            <p className="searchText">검색</p>
          </div>
          <div className="rightContents">
            <img className="homeIcon" src="/images/home.png" alt="home" />
            <img className="sendIcon" src="/images/send.png" alt="send" />
            <img
              className="exploreIcon"
              src="/images/explore.png"
              alt="explore"
            />
            <img className="heartIcon" src="/images/heart.png" alt="heart" />
            <img className="profileIcon" src="/images/user.png" alt="profile" />
          </div>
        </nav> */}
        <section>
          <article>
            <div className="feedHeader">
              <div className="feedProfile">
                <img
                  className="feedProfileImage"
                  src="/images/jaehyun/hoit_logo.jpg"
                  alt="Profile"
                />
                <div className="userId">hoit_studio</div>
              </div>
              <img
                className="moreButtonImage"
                src="/images/jaehyun/more.png"
                alt="more"
              />
            </div>
            <img
              className="firstFeed"
              src="/images/jaehyun/styx.png"
              alt="feedimage"
            />
            <div className="feedContent">
              <div className="feedIcons">
                <div className="feedLeftIcons">
                  <img
                    className="likeIcon"
                    src="/images/jaehyun/heart.png"
                    alt="like"
                  />
                  <img
                    className="dmIcon"
                    src="/images/jaehyun/speech-bubble.png"
                    alt="dm"
                  />
                  <img
                    className="shareIcon"
                    src="/images/jaehyunsend.png"
                    alt="share"
                  />
                </div>
                <img
                  className="bookmarkIcon"
                  src="/images/jaehyun/ribbon.png"
                  alt="bookmark"
                />
              </div>
              <div className="feedDescription">
                <p>좋아요 2개</p>
                <span>hoit_studio</span> Styx : isonomiā official trailer
                <p>#Styx #hoitstudio</p>
                <ul id="reply"></ul>
              </div>
            </div>
            <div className="feedReply">
              <img
                className="smileIcon"
                src="/images/jaehyun/smile.png"
                alt="smile"
              />
              <input
                className="replyInput"
                type="text"
                placeholder="댓글달기..."
              />
              <button className="postButton">게시</button>
            </div>
          </article>
          <aside>
            <div className="account">
              <div className="accountUser">
                <img
                  className="accountUserIcon"
                  src="/images/jaehyun/hoit_logo.jpg"
                  alt="profile"
                />
                <div className="accountUserId">
                  hoit_studio
                  <p>hoit_studio</p>
                </div>
              </div>
              <p>전환</p>
            </div>
            <div className="story">
              <div className="storyTop">
                <p>스토리</p>
                <p>모두 보기</p>
              </div>
              <div className="storyContent">
                <img
                  className="otherUserIcon"
                  src="/images/jaehyun/user.png"
                  alt="profile"
                />
                <p className="otherUserId">hoit_studio</p>
              </div>
            </div>
            <div className="recommendUser">
              <div className="recommendUserTop">
                <p>회원님을 위한 추천</p>
                <p>모두 보기</p>
              </div>
              <div className="recommendUserContent">
                <div className="recommendUserLeftContent">
                  <img
                    className="otherUserIcon"
                    src="/images/jaehyun/user.png"
                    alt="profile "
                  />
                  <p className="otherUserId">hoit_studio</p>
                </div>
                <p>팔로우</p>
              </div>
            </div>
            <footer>
              소개 ・ 도움말 ・ 홍보 센터 ・ API ・ 채용 정보 ・
              개인정보처리방침 ・ 약관 ・ 위치 ・ 인기 ・ 계정 ・ 해시태그
              ・언어 © 2021 INSTAGRAM FROM FACEBOOK
            </footer>
          </aside>
        </section>
      </main>
    );
  }
}

export default withRouter(JaehyunMain);
