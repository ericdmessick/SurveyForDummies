import React, { Component } from "react";
import Header from "./components/header";
import HiringEricMessickSurvey from "./components/hiringEricMessick_survey";
import Footer from "./components/footer";

import "./App.css";

class App extends Component {
  render() {
    return (
        <div className="App">
        
            <Header />
            
            <div className="App-survey">
                <HiringEricMessickSurvey />
            </div>
      
            <Footer />
            
        </div>
    );
  }
}

export default App;
