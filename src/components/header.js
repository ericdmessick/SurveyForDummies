import React, { Component } from 'react';
import logo from "../logo.png";

export default class Header extends Component {
    render() {
      return ( 
        <div className="header_container">
            
            <div className="header_content">    
                <h2 className="black"><strong>Making Bosses Job's Easier</strong></h2>
                
                <div className="header_container-black">
                    
                    <h3 className="white">Hiring Eric Messick</h3> 
                    <h1 className="white">Survey</h1>
                    
                    <img src={logo} className="header_logo" alt="logo" />
                    
                    <div className="header_blue-container">
                        <h2 className="white">2017 Web Dev Edition</h2>
                    </div>
                    
                </div>
            </div>
        </div>
      );
    }
}