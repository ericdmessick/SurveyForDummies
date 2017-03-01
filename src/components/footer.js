import React, { Component } from 'react';
import me from "https://surveyfordummies.herokuapp.com/public/me/DummiesGuy.png";

export default class Footer extends Component {
    render() {
      return ( 
        <div className="footer_container">
              
            <div className="footer_content">
                
                <div className="footer_blue-container">
                </div>  
                
                <div className="footer_yellow-container">
                    
                    <div className="blue">
                        <h2><strong>A Survey to</strong></h2>
                        <h2><strong>&nbsp;&nbsp;Expedite</strong></h2>
                        <h2><strong>&nbsp;&nbsp;&nbsp;&nbsp;Employment</strong></h2>
                    </div>
                    
                    <div className="me_container">
                        <img src={me} className="footer_me" alt="me" />
                        
                        <div className="bubble_container">
                            <p className="black bubbleText">Some text</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
      );
    }
}