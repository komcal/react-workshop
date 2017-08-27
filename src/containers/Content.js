import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: 'no one.',
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
  onInputChange = (e) => {
    console.log(e.target.value);
    this.setState({
      name: e.target.value,
    });
  }
  render() {
    return (
      <div className="App-content">
        <p>I'm {this.state.name}</p>
        <h1>{this.state.count}</h1>
        <button onClick={this.increase.bind(this)}>+</button>
        <button onClick={this.decrease}>-</button>
        <input
          type="text"
          onChange={this.onInputChange}
          value={this.state.name}
        />
      </div>
    );
  }
}

export default Content;
