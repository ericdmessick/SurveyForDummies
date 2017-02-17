import React, { Component } from "react";
import Header from "./components/header";
import HiringEricMessickSurvey from "./components/hiringEricMessick_survey";

import "./App.css";

class App extends Component {
  render() {
    return (
        <div className="App">
        
            <Header />
            
            <div className="App-survey">
                <HiringEricMessickSurvey />
            </div>
      
        </div>
    );
  }
}

export default App;
