import React from 'react';
import { withRouter } from 'react-router';
import Nav from '../../../components/Nav/Nav';
import InputBox from './InputBox';
import CommentList from './commentList';
import sendCommentBtn from './sendCommentBtn';
import './taekjunMain.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      commentInputData: {
        name: 'inputComment',
        placeholder: '댓글 달기...',
      },
      btnType: 'submit',
      nickname: 'user1',
      commentValue: 'value',
      commentImg: {
        src: 'images/taekjun/heart.png',
        alt: 'heartIcon',
      },
      lists: [],
    };
  }

  getCommentValue = value => {
    const people = [];
    let user = {};
    {
      for (let i = 0; i < 10; i++) {
        people.push('user' + i);
      }
      user = people[Math.trunc(Math.random() * 10)];
    }
    this.setState({
      nickname: user,
      commentValue: value,
    });
  };

  pushComment = () => {
    this.setState({
      lists: this.state.lists.concat(
        <li className="whoseComment">
          <p className="name">{this.state.nickname}</p>
          <p className="commentContext">{this.state.commentValue}</p>
          <img
            className="commentHeartImg"
            src={this.state.commentImg.src}
            alt={this.state.commentImg.alt}
          ></img>
          <p className="commentDelete">ⅹ</p>
        </li>
      ),
    });
  };

  render() {
    return (
      <div>
        <Nav />
        <main className="mainPage">
          <div className="mainContentsFlexBox">
            <section className="followingUserListBox">
              <ul className="followingUserList">
                <li className="followingUser">
                  <img
                    className="userProfileImg"
                    src="images/taekjun/user1.jpeg"
                    alt="userProfileImage"
                  />
                  <p className="username">user1_doheyon</p>
                </li>
                <li className="followingUser">
                  <img
                    className="userProfileImg"
                    src="images/taekjun/user2.jpeg"
                    alt="userProfileImage"
                  />
                  <p className="username">user2_yeonuk</p>
                </li>
              </ul>

              <article className="feedLayoutBox">
                <header className="feedHeader">
                  <div className="userInfo">
                    <img
                      className="userProfileImg"
                      src="images/taekjun/user1.jpeg"
                      alt="userProfileImage"
                    />
                    <p className="username">user1_dohyeon</p>
                  </div>
                  <button className="optionPopup">
                    <svg height="16" role="img" viewBox="0 0 48 48" width="16">
                      <circle
                        clip-rule="evenodd"
                        cx="8"
                        cy="24"
                        fill-rule="evenodd"
                        r="4.5"
                      ></circle>
                      <circle
                        clip-rule="evenodd"
                        cx="24"
                        cy="24"
                        fill-rule="evenodd"
                        r="4.5"
                      ></circle>
                      <circle
                        clip-rule="evenodd"
                        cx="40"
                        cy="24"
                        fill-rule="evenodd"
                        r="4.5"
                      ></circle>
                    </svg>
                  </button>
                </header>

                <div className="feedImgBox">
                  <img
                    className="feedImg"
                    src="images/taekjun/test.jpg"
                    alt="userUploadImage"
                  />
                </div>

                <main className="userInteractionArea">
                  <section className="heartCommentShareImg">
                    <ul>
                      <li></li>
                      <img src="images/taekjun/heart.png" alt="heartIcon" />
                      <li></li>
                      <img src="images/taekjun/comment.png" alt="commentIcon" />
                      <li></li>
                      <img src="images/taekjun/share.png" alt="shareIcon" />
                    </ul>
                    <img
                      className="bookmarkImg"
                      src="images/taekjun/bookmark.png"
                      alt="bookmarkIcon"
                    />
                  </section>
                  <section className="howManyHeart">
                    <span>wecode</span>님 외 <span>40명</span>이 좋아합니다.
                  </section>
                  <CommentList data={this.state.lists} />
                  <p className="whenLastCommentUpload">11시간 전</p>
                  <section className="leaveComment">
                    <div className="commentBox">
                      <button className="openImogeBox">
                        <img src="images/taekjun/imoge.png" alt="imogeIcon" />
                      </button>
                      <InputBox
                        data={this.state.commentInputData}
                        transferValue={this.getCommentValue}
                      />
                      <sendCommentBtn
                        className="sendComment"
                        btnType={this.state.btnType}
                        onClick={this.pushComment}
                      >
                        게시
                      </sendCommentBtn>
                    </div>
                  </section>
                </main>
              </article>
            </section>

            <aside className="sidebarBox">
              <div className="sidebar">
                <section className="sidebarAboutUser">
                  <article className="myProfile">
                    <div className="userContainer">
                      <img
                        src="images/taekjun/myprofile.jpeg"
                        alt="myProfileImage"
                      />
                      <div className="userInfo">
                        <h6>taekj_s</h6>
                        <p className="whoIsFollowing">안녕하세요</p>
                      </div>
                    </div>
                    <a href="#">전환</a>
                  </article>

                  <article className="sidebarInfo">
                    <span className="recommend">회원님을 위한 추천</span>
                    <span className="allSee">모두 보기</span>
                  </article>

                  <ul className="sidebarRecommendUserList">
                    <li className="user">
                      <div className="userContainer">
                        <img
                          className="userProfileImg"
                          src="images/taekjun/user1.jpeg"
                          alt="userProfileImage"
                        />
                        <div className="userInfo">
                          <h6>areum</h6>
                          <p className="whoIsFollowing">
                            회원님을 팔로우합니다
                          </p>
                        </div>
                      </div>
                      <a href="#">팔로우</a>
                    </li>
                    <li className="user">
                      <div className="userContainer">
                        <img
                          className="userProfileImg"
                          src="images/taekjun/user5.jpeg"
                          alt="userProfileImage"
                        />
                        <div className="userInfo">
                          <h6>dohyeon</h6>
                          <p className="whoIsFollowing">
                            회원님을 팔로우합니다
                          </p>
                        </div>
                      </div>
                      <a href="#">팔로우</a>
                    </li>
                    <li className="user">
                      <div className="userContainer">
                        <img
                          className="userProfileImg"
                          src="images/taekjun/user2.jpeg"
                          alt="userProfileImage"
                        />
                        <div className="userInfo">
                          <h6>yeonuk</h6>
                          <p className="whoIsFollowing">
                            회원님을 팔로우합니다
                          </p>
                        </div>
                      </div>
                      <a href="#">팔로우</a>
                    </li>
                    <li className="user">
                      <div className="userContainer">
                        <img
                          className="userProfileImg"
                          src="images/taekjun/user3.jpeg"
                          alt="userProfileImage"
                        />
                        <div className="userInfo">
                          <h6>yeonwoo</h6>
                          <p className="whoIsFollowing">
                            회원님을 팔로우합니다
                          </p>
                        </div>
                      </div>
                      <a href="#">팔로우</a>
                    </li>
                    <li className="user">
                      <div className="userContainer">
                        <img
                          className="userProfileImg"
                          src="images/taekjun/user4.jpeg"
                          alt="userProfileImage"
                        />
                        <div className="userInfo">
                          <h6>yeoleum</h6>
                          <p className="whoIsFollowing">
                            회원님을 팔로우합니다
                          </p>
                        </div>
                      </div>
                      <a href="#">팔로우</a>
                    </li>
                  </ul>
                </section>

                <ul className="sidebarAboutCompany">
                  <li>
                    <a href="">소개</a>
                  </li>
                  <li>
                    <a href="">도움말</a>
                  </li>
                  <li>
                    <a href="">홍보 센터</a>
                  </li>
                  <li>
                    <a href="">API</a>
                  </li>
                  <li>
                    <a href="">채용 정보</a>
                  </li>
                  <li>
                    <a href="">개인정보처리방침</a>
                  </li>
                  <li>
                    <a href="">약관</a>
                  </li>
                  <li>
                    <a href="">위치</a>
                  </li>
                  <li>
                    <a href="">인기 계정</a>
                  </li>
                  <li>
                    <a href="">해시태그</a>
                  </li>
                  <li>
                    <a href="">언어</a>
                  </li>
                </ul>

                <section className="sidebarAboutCopyright">
                  ⓒ 2021 WESTAGRAM FROM WECODE
                </section>
              </div>
            </aside>
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
