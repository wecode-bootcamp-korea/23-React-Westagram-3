import React, { Component } from 'react';

class SidebarAboutCompany extends Component {
  render() {
    return (
      <li key={this.props.key}>
        <a href="">{this.props.content}</a>
      </li>
    );
  }
}

export default SidebarAboutCompany;
