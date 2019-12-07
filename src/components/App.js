import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
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
    const data = calculate({ ...this.state }, button);
    this.setState({ ...data });
  }

  resultToStr = () => {
    const { total, next, operation } = this.state;
    let result = `${total}${operation}${next}`.replace(/null/g, '');
    return result === '' ? undefined : result;
  }

  render() {
    return (
      <div className="App">
        <Display result={this.resultToStr()} />
        <ButtonPanel handleClick={this.handleClickBtn} />
      </div>
    );
  }
}

export default App;
