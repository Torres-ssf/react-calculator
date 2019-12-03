import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="App">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
