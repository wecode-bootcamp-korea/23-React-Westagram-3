import React from 'react';
import './Main.scss';
import Nav from '../../../components/Nav/Nav';

import Feed from './Feed';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentComment: {
        id: 0,
        userId: '',
        commentText: '',
        isLiked: false,
      },
      currentFeed: {},
      commentList: [],
      feedList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => {
        this.setState({
          currentComment: {
            id: result[result.length - 1].id,
          },
          commentList: result,
        });
        console.log(result[1].id);
        console.log('이게 안나와여?' + result);
        console.log(this.state.commentList);
      });

    fetch('http://localhost:3000/data/FeedData.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => {
        this.setState({
          feedList: result,
        });
        console.log('이게 안나와여???????');
        console.log(this.state.feedList);
      });
  }

  handeleComment = content => {
    this.setState({
      currentComment: {
        id: this.state.currentComment.id,
        userId: '아무개',
        commentText: content,
        isLiked: false,
      },
    });
  };
  writeComment = e => {
    this.setState({
      commentList: this.state.commentList.concat({
        id: this.state.currentComment.id + 1,
        userName: this.state.currentComment.userId,
        content: this.state.currentComment.commentText,
        isLiked: this.state.currentComment.isLiked,
      }),
    });
    // this.clearComment();
  };
  clearComment = () => {
    this.setState({
      currentComment: {
        commentText: '',
      },
    });
  };

  render() {
    console.log(this.state.commentList);
    console.log(this.state.feedList);
    // console.log(this.commentList);
    // console.log(this.state.comment.commentNum);
    return (
      <article id="wrap">
        <section id="topBar">
          <Nav />
        </section>
        <section id="contents">
          <div className="main">
            <div className="feedWrap">
              {this.state.feedList.map(item => {
                return (
                  <Feed
                    commentList={this.state.commentList}
                    onChange={this.handeleComment}
                    onClick={this.writeComment}
                    // feedUserId={this.item.feeduserId}
                    // alt={this.item.alt}
                    // src={this.item.src}
                    // heart={this.item.heartCheck}
                  />
                );
              })}
            </div>

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
