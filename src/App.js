import React, { Component } from 'react';
import HiringEricMessickSurvey from './components/hiringEricMessick_survey';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <h4>Hiring Eric Messick</h4>
          <h2>Survey for Dummies</h2>
        </div>
        
        <p className="App-intro">Answer the Questions Fool!</p>
        <div className="App-survey">
            <HiringEricMessickSurvey />
        </div>
      </div>
    );
  }
}

export default App;
