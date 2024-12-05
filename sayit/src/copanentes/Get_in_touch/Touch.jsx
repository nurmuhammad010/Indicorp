import React from 'react';
import "./Touch.css";
import  Touch1  from '../img/Touch_1.png'
import  Touch2  from '../img/Touch_2.png'
import  Touch3  from '../img/Touch_3.png'
function Touch() {
  return (
    <div className='Touch' id='Touch'>
      <div className="Touch_type">
        <h3>Get In Touch</h3>
        <span>Problems trying to resolve the conflict between </span>
        <span>the two major realms of Classical physics: Newtonian mechanics</span>
      </div>
      <div className="Touch_content">
        <div className="Touch_card1">
         <img src={Touch1} alt="" />
         <span>georgia.young@example.com</span>
         <span>georgia.young@ple.com</span>
         <h4>Get Support</h4>
         <button>Submit Request</button>
        </div>
        <div className="Touch_card2">
          <img src={Touch2} alt="" />
          <span>georgia.young@example.com</span>
          <span> georgia.young@ple.com</span>
         <h4>Get Support</h4>
         <button>Submit Request</button>
        </div>
        <div className="Touch_card3">
         <img src={Touch3} alt="" />
         <span>georgia.young@example.com </span>
         <span>georgia.young@ple.com</span>
         <h4>Get Support</h4>
         <button>Submit Request</button>
        </div>
      </div>
    </div>
  )
}

export default Touch
