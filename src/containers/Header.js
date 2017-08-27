import React, { Component } from 'react';
import logo from '../logo.svg';
import Title from '../components/Title';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title />
      </div>
    );
  }
}

export default Header;
