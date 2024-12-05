import React from 'react'
import busiocn1 from '../img/bus_icon.png'
import busiocn2 from '../img/bus_icon1.png'
import busiocn3 from '../img/bus_icon2.png'
import busiocn4 from '../img/bus_icon3.png'
import busiocn5 from '../img/bus_icon4.png'
import busiocn6 from '../img/bus_icon5.png'
import './bus_icon.css'
function Bus_icon() {
  return (
    <div>
      <div className="bus-icon">
        <img src={busiocn1} alt="" />
        <img src={busiocn2} alt="" />
        <img src={busiocn3} alt="" />
        <img src={busiocn4} alt="" />
        <img src={busiocn5} alt="" />
        <img src={busiocn6} alt="" />
      </div>

      <div className="button-type-box">
      <div className="buttonbox">
       <div className="type-input">
        <div className="type-input1">
        <h2>Subscribe For Latest </h2>
        <h2>Newsletter</h2>
        </div>
        <input type="text" placeholder="Your Email"/>
          <button>Subscribe</button>  
      </div>
       </div>
      </div>
    </div>
  )
}

export default Bus_icon;
