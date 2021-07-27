import React from 'react';
import './Main.scss';
import Nav from '../../../components/Nav/Nav';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentComment: {
        userId: '',
        commentText: '',
      },
      commentList: [],
    };
  }
  handeleComment = e => {
    this.setState({
      currentComment: {
        userId: '아무개',
        commentText: e.target.value,
      },
    });
  };
  writeComment = e => {
    this.setState({
      commentList: this.state.commentList.concat({
        userId: this.state.currentComment.userId,
        commentText: this.state.currentComment.commentText,
      }),
    });
  };

  render() {
    // console.log(this.commentList);
    // console.log(this.state.comment.commentNum);
    return (
      <article id="wrap">
        <section id="topBar">
          <Nav />
        </section>
        <section id="contents">
          <div className="main">
            <article className="feed">
              <div className="feedNav">
                <div>
                  <img
                    className="feedProfileImg"
                    src="/images/daeung/profileImage.png"
                    alt="profile"
                  />
                </div>
                <div>
                  <a className="idLink" href="">
                    user_id
                  </a>
                </div>
                <div className="feedOption">
                  <i className="fas fa-ellipsis-h"></i>
                </div>
              </div>

              <div className="feedImg">
                <img
                  src="https://images.unsplash.com/photo-1613066803040-78aac6f88b3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
                  alt="city"
                />
              </div>

              <div className="feedReaction">
                <div className="feedReactionBox">
                  <div className="leftFeedReaction">
                    <i id="feedHeart" className="far fa-heart fa-lg"></i>
                    <i className="far fa-comment-dots fa-lg"></i>
                    <i className="far fa-share-square fa-lg"></i>
                  </div>
                  <div className="rightFeedReaction fa-lg">
                    <i className="far fa-bookmark"></i>
                  </div>
                </div>
              </div>
              <div className="feedLikeCountBox">
                <div className="feedLikeCountBoxImg">
                  <img
                    className="feedLikeProfileImg"
                    src="./images/daeung/profileImage.png"
                    alt="profile"
                  />
                </div>
                <div className="feedlikeInfo">
                  <span className="writerId">user_id</span>님{' '}
                  <span className="likeCount">외 10,003명</span>이 좋아합니다
                </div>
              </div>
              <div className="feedInfoBox">
                <span className="feedInfoId">user_id</span>
                <span className="feedInfoContents">위워크에서 공부하다가</span>
                <span className="feedInfoMore">
                  ...<button className="moreButton">더 보기</button>
                </span>
              </div>
              <div className="feedReplyBox">
                {this.state.commentList.map(comment => {
                  return (
                    <div className="feedReplyPart1">
                      <div>
                        <span className="feedReplyId">visitor1234_id</span>
                        <span className="feedReplyContents">우와....</span>
                      </div>
                      <div className="deleteReply">
                        <div>
                          <i className="fas fa-times deleteButton"></i>
                        </div>
                        <div>
                          <i className="far fa-heart fa-sm heartReply"></i>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="feedReplyInfoPart">
                  <span className="feedReplyInfo">11분 전</span>
                </div>
              </div>

              <div className="feedWriteReply">
                <div className="feedWriteEmoji">
                  <i className="far fa-smile fa-2x"></i>
                </div>
                <div className="feedWriteInput">
                  <div className="replyBox">
                    <textarea
                      className="textarea"
                      placeholder="댓글 달기..."
                      name=""
                      id="reply"
                      rows="1"
                      onChange={this.handeleComment}
                    ></textarea>
                  </div>
                  <div>
                    <button
                      className="replyButton"
                      onClick={this.writeComment} /*onClick="ReplySubmit()"*/
                    >
                      게시
                    </button>
                  </div>
                </div>
              </div>
            </article>
            <aside className="mainRight">
              <div className="asideTop">
                <div>
                  <img
                    className="asideTopImg"
                    src="/images/daeung/wecode.png"
                    alt="wecode"
                  />
                </div>
                <div className="asideTopHeader">
                  <div>
                    <span className="wecodeBootcampFonts">wecodeBootcamp</span>
                  </div>
                  <div className="wecodeGray">
                    <span className="asideTopHeaderLeft">WeCode </span>
                    <span>|</span>
                    <span className="asideTopHeaderRight">위코드</span>
                  </div>
                </div>
              </div>
              <div className="userStory">
                <div className="userStoryTitle">
                  <div>
                    <span>스토리</span>
                  </div>
                  <div>
                    <span>모두 보기</span>
                  </div>
                </div>
                <div className="userStoryContents">
                  <div>
                    <div className="storyFlex">
                      <div className="storyBoxGap">
                        <img
                          className="asideStoryImg"
                          src="/images/daeung/wecode.png"
                          alt="wecode"
                        />
                      </div>
                      <div>
                        <div>
                          <span className="wecodeBootcamp">
                            wecode_bootcamp
                          </span>
                        </div>
                        <div className="wecodeGray">
                          <span>16</span>
                          <span>분 전</span>
                        </div>
                      </div>
                    </div>
                    <div className="storyFlex">
                      <div className="storyBoxGap">
                        <img
                          className="asideStoryImg"
                          src="/images/daeung/wecode.png"
                          alt="wecode"
                        />
                      </div>
                      <div>
                        <div>
                          <span className="wecodeBootcamp">
                            wecode_bootcamp
                          </span>
                        </div>
                        <div className="wecodeGray">
                          <span>23</span>
                          <span>분 전</span>
                        </div>
                      </div>
                    </div>
                    <div className="storyFlex">
                      <div className="storyBoxGap">
                        <img
                          className="asideStoryImg"
                          src="/images/daeung/wecode.png"
                          alt="wecode"
                        />
                      </div>
                      <div>
                        <div>
                          <span className="wecodeBootcamp">
                            wecode_bootcamp
                          </span>
                        </div>
                        <div className="wecodeGray">
                          <span>4</span>
                          <span>시간 전</span>
                        </div>
                      </div>
                    </div>
                    <div className="storyFlex">
                      <div className="storyBoxGap">
                        <img
                          className="asideStoryImg"
                          src="/images/daeung/wecode.png"
                          alt="wecode"
                        />
                      </div>
                      <div>
                        <div>
                          <span className="wecodeBootcamp">
                            wecode_bootcamp
                          </span>
                        </div>
                        <div className="wecodeGray">
                          <span>21</span>
                          <span>시간 전</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recommendFriends">
                <div>
                  <div className="recommendFriendsTitle">
                    <div>
                      <span>회원님을 위한 추천</span>
                    </div>
                    <div>
                      <span>모두 보기</span>
                    </div>
                  </div>
                  <div>
                    <div className="storyFlex">
                      <div className="storyBoxGap">
                        <img
                          className="asideRecommendImg"
                          src="/images/daeung/wecode.png"
                          alt="wecode"
                        />
                      </div>
                      <div>
                        <div>
                          <span className="wecodeBootcamp">
                            wecode_bootcamp
                          </span>
                        </div>
                        <div className="wecodeGray">
                          <span>jkjkeee111</span>
                          <span>님 외 2명이 ...</span>
                        </div>
                      </div>
                      <div>
                        <button className="recommendFollowButton">
                          팔로우
                        </button>
                      </div>
                    </div>
                    <div className="storyFlex">
                      <div className="storyBoxGap">
                        <img
                          className="asideRecommendImg"
                          src="/images/daeung/wecode.png"
                          alt="wecode"
                        />
                      </div>
                      <div>
                        <div>
                          <span className="wecodeBootcamp">
                            wecode_bootcamp
                          </span>
                        </div>
                        <div className="wecodeGray">
                          <span>dddwww4343</span>
                          <span>님 외 23명이 ...</span>
                        </div>
                      </div>
                      <div>
                        <button className="recommendFollowButton">
                          팔로우
                        </button>
                      </div>
                    </div>
                    <div className="storyFlex">
                      <div className="storyBoxGap">
                        <img
                          className="asideRecommendImg"
                          src="/images/daeung/wecode.png"
                          alt="wecode"
                        />
                      </div>
                      <div>
                        <div>
                          <span className="wecodeBootcamp">
                            wecode_bootcamp
                          </span>
                        </div>
                        <div className="wecodeGray">
                          <span>ckdoqk23221</span>
                          <span>님 외 111명이 ...</span>
                        </div>
                      </div>
                      <div>
                        <button className="recommendFollowButton">
                          팔로우
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="asideFooter wecodeGray">
                <div className="footerListBox">
                  <ul className="footerList">
                    <li>Instagram 정보</li>
                    <li>·</li>
                    <li>지원</li>
                    <li>·</li>
                    <li>홍보 센터</li>
                    <li>·</li>
                    <li>API</li>
                    <li>·</li>
                    <li>채용 정보</li>
                    <li>·</li>
                    <li>개인정보처리방침</li>
                    <li>·</li>
                    <li>약관</li>
                    <li>·</li>
                    <li>디렉터리</li>
                    <li>·</li>
                    <li>프로필</li>
                    <li>·</li>
                    <li>해시태그</li>
                    <li>·</li>
                    <li>언어</li>
                  </ul>
                </div>
                <div className="footerBox">
                  <span>© 2021 INSTAGRAM</span>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </article>
    );
  }
}

export default Main;
