import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header';
import Content from './containers/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "komcal"
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Content name={this.state.name} />
      </div>
    );
  }
}

export default App;
