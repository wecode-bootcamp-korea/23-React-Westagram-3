import React from 'react';

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li key={this.props.key} style={{ listStyle: 'none' }}>
        <span style={{ fontWeight: 'bold', marginRight: '20px' }}>
          {this.props.userName}
        </span>
        <span>{this.props.content}</span>
      </li>
    );
  }
}

export default Content;
