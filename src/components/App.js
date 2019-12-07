import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClickBtn = (button) => {
    console.log(button);
  }

  render() {
    return (
      <div className="App flex">
        <Display />
        <ButtonPanel handleClick={this.handleClickBtn} />
      </div>
    );
  }
}

export default App;
