import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <div className="App-content">
        <p>My name is {this.props.name}</p>
      </div>
    );
  }
}

export default Content;
