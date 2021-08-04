import React from 'react';
import './KayoungMain.scss';

class Comment extends React.Component {
  render() {
    const { name, comment } = this.props;
    return (
      <li key={this.props.id}>
        <span
          style={{
            marginRight: 10,
            fontSize: 14,
            fontWeight: 600,
            color: 262626,
          }}
        >
          {name}
        </span>
        <span style={{ fontSize: 14, fontWeight: 400, color: 262626 }}>
          {comment}
        </span>
      </li>
    );
  }
}

export default Comment;
