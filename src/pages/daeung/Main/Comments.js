import React from 'react';

class Comments extends React.Component {
  render() {
    // console.log(this.props.key);
    return (
      <div className="feedReplyPart1" key={this.props.keyNum}>
        <div>
          <span className="feedReplyId">{this.props.userName}</span>
          <span className="feedReplyContents">
            {this.props.content}'키 값은'{this.props.id}
          </span>
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
  }
}

export default Comments;
