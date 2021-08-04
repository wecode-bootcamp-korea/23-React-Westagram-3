import React from 'react';
import { withRouter } from 'react-router';
import Nav from '../../../components/Nav/Nav';
import Comment from './Comment';
import Recommendation from './Recommendation';
import Footer from './Footer';
import './KayoungMain.scss';

class KayoungMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      replyBox: [],
      replyContent: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          replyBox: data,
        });
      });
  }

  storeComment = e => {
    this.setState({ replyContent: e.target.value });
    if (e.key === 'Enter') {
      this.addComment(e);
    }
  };

  addComment = e => {
    e.preventDefault();
    const { replyBox, replyContent } = this.state;
    this.setState({
      replyBox: replyBox.concat(replyContent),
      replyContent: '',
    });
  };

  render() {
    const { replyBox, replyContent } = this.state;
    return (
      <div className="mainWrapper">
        <Nav />
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
                      <span className="name" id="replyId">
                        canon_mj
                      </span>
                      <span className="titleSpan" id="replyContent">
                        한가롭게 수영하며 커피 마시고 싶다...
                      </span>
                    </li>
                    {this.state.replyBox.map(reply => {
                      return (
                        <Comment
                          key={reply.id}
                          name={reply.userName}
                          comment={reply.content}
                        />
                      );
                    })}
                  </ul>
                  <form
                    className="replyForm"
                    method="POST"
                    onSubmit={this.addComment}
                  >
                    <input
                      type="text"
                      placeholder="댓글 달기"
                      id="replyInput"
                      onKeyUp={this.storeComment}
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
            <Recommendation />
            <Footer />
          </div>
        </aside>
      </div>
    );
  }
}

export default withRouter(KayoungMain);
