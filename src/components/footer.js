import React, { Component } from 'react';
import me from "../public/me/dummiesGuy.png";
//import me2 from "../dummiesGuy.png";

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
                    </div>
                    
                    <div className="bubble_container">
                            
                        <canvas
                            is="gwd-bezierpath" 
                            width="773" 
                            height="470" 
                            class="gwd-canvas-130s gwd-gen-1y9jgwdanimation" 
                            anchors="[[[52.5,1.52,0],[52.5,0.5,0],[52.5,0.5,0]],[[382.5,1.5,0],[382.5,2.5,0],[382.5,3.5,0]],[[691.5,1.5,0],[691.5,1.5,0],[691.5,1.5,0]],[[771.5,43.5,0],[772.5,163.5,0],[773.5,283.5,0]],[[634.5,470.51,0],[392.5,469.51,0],[284.35,469.06,0]],[[195.63,437.54,0],[129.54,389.34,0],[124.85,385.92,0]],[[91.85,405.49,0],[68.08,374.08,0],[89.62,383.06,0]],[[106.84,370.92,0],[102.94,367.51,0],[37.32,310.16,0]],[[0.99,236.94,0],[0.5,170.51,0],[-0.5,35.51,0]]]"
                            closed="" 
                            stroke-width="1" 
                            stroke-color="null" 
                            fill-color="[0,0.4470588235294118,0.7372549019607844,1]" 
                            geom-type="5">
                                <p className="black bubbleText">Some text</p>
                        </canvas>
                        
                    </div>
                </div>
            </div>
        </div>
      );
    }
}