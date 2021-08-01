import React from 'react';
import { withRouter } from 'react-router';
import Nav from '../../../components/Nav/Nav';
import CommentList from './CommentList';
import RecommendUserList from './RecommendUserList';
import SidebarAboutCompany from './SidebarAboutCompany';
import './taekjunMain.scss';
import '../../../styles/common.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      newCommentValue: '',
      commentArray: [],
      userArray: ['areum', 'doheyon', 'yeonuk', 'yeonu', 'yeoleum'],
      companyInfoArray: [
        '소개',
        '도움말',
        '홍보 센터',
        'API',
        '채용 정보',
        '개인정보처리방침',
        '약관',
        '위치',
        '인기',
        '계정',
        '해시테그',
        '언어',
      ],
    };
  }

  newComment = e => {
    const newCommentValue = e.target.value;
    this.setState({ newCommentValue });
  };

  addNewComment = e => {
    e.preventDefault();

    const newCommentValue = this.state.newCommentValue;

    if (!newCommentValue) {
      alert('내용을 입력해주세요');
    } else {
      this.setState({
        commentArray: this.state.commentArray.concat(newCommentValue),
        newCommentValue: '',
      });
    }
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
                        clipRule="evenodd"
                        cx="8"
                        cy="24"
                        fillRule="evenodd"
                        r="4.5"
                      ></circle>
                      <circle
                        clipRule="evenodd"
                        cx="24"
                        cy="24"
                        fillRule="evenodd"
                        r="4.5"
                      ></circle>
                      <circle
                        clipRule="evenodd"
                        cx="40"
                        cy="24"
                        fillRule="evenodd"
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
                  <ul className="commentUploaded">
                    {this.state.commentArray.map((content, index) => {
                      return (
                        <CommentList
                          key={index}
                          userName={index}
                          comment={content}
                        />
                      );
                    })}
                  </ul>
                  <p className="whenLastCommentUpload">11시간 전</p>
                  <section className="leaveComment">
                    <form
                      className="imogeCommentBox"
                      onSubmit={this.addNewComment}
                    >
                      <button className="openImogeBox">
                        <img src="images/taekjun/imoge.png" alt="imogeIcon" />
                      </button>
                      <input
                        className="commentInput"
                        name="comment"
                        type="text"
                        value={this.state.newCommentValue}
                        placeholder="댓글 달기..."
                        onChange={this.newComment}
                      />
                      <button className="commentSaveBtn" type="submit">
                        게시
                      </button>
                    </form>
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
                    {this.state.userArray.map((name, index) => {
                      return <RecommendUserList key={index} userName={name} />;
                    })}
                  </ul>
                </section>

                <ul className="sidebarAboutCompany">
                  {this.state.companyInfoArray.map((content, index) => {
                    return (
                      <SidebarAboutCompany key={index} content={content} />
                    );
                  })}
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
