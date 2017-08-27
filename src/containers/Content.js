import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }
  increase() {
    this.setState({
      count: this.state.count + 1,
    })
  }
  decrease = () => {
    this.setState({
      count: this.state.count - 1,
    })
  }
  render() {
    return (
      <div className="App-content">
        <p>My name is {this.props.name}</p>
        <h1>{this.state.count}</h1>
        <button onClick={this.increase.bind(this)}>+</button>
        <button onClick={this.decrease}>-</button>
      </div>
    );
  }
}

export default Content;
