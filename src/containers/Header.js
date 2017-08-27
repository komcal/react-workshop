import React, { Component } from 'react';
import logo from '../logo.svg';
import Title from '../components/Title';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Hello from state",
    }
  }
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title text={this.state.titleText} />
      </div>
    );
  }
}

export default Header;
