import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      button: null,
    };
  }

  render() {
    return (
      <div className="App flex">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
