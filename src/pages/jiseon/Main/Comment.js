import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <>
        <div className="commentFlex">
          <span className="boldFont">{this.props.id}</span>
          <li className="commentStyle">{this.props.comment}</li>
        </div>
      </>
    );
  }
}

export default Comment;
