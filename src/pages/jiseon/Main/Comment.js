import React from 'react';

class Comment extends React.Component {
  render() {
    console.log(this.props);
    return (
      <li className="commentFlex">
        <span className="boldFont">{this.props.name}</span>
        <div>
          <span className="commentStyle">{this.props.comment}</span>
        </div>
      </li>
    );
  }
}

export default Comment;
