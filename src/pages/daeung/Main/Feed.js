import { isThisExpression } from '@babel/types';
import React from 'react';
import Comments from './Comments';

class Feed extends React.Component {
  sendValue = e => {
    const userId = e.target.value;

    this.props.onChange(userId);
  };
  render() {
    return (
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
              {this.props.feedUserId}
            </a>
          </div>
          <div className="feedOption">
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </div>

        <div className="feedImg">
          <img src={this.props.src} alt={this.props.alt} />
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
            <span className="likeCount">외 {this.props.heart}명</span>이
            좋아합니다
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
          {this.props.commentList.map((comment, index) => {
            return (
              <Comments
                userName={comment.userName}
                content={comment.content}
                key={comment.id}
                isLiked={comment.isLiked}
              />
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
                onChange={this.sendValue}
                // value={this.state.currentComment.commentText}
              ></textarea>
            </div>
            <div>
              <button
                className="replyButton"
                onClick={this.props.onClick} /*onClick="ReplySubmit()"*/
              >
                게시
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Feed;
