import React from 'react';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.addContent}>
        <input
          name="comment"
          className="replyInput"
          type="text"
          placeholder="댓글달기..."
          onKeyUp={this.currentState}
        />
        <button className="postButton" type="submit">
          게시
        </button>
      </form>
    );
  }
}

export default InputForm;
