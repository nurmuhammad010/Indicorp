import React from 'react';
import './Card.css';
import Icon from "../img/icon1.png";
import Icon1 from "../img/icon2.png";
import Icon2 from "../img/icon3.png";
import Icon3 from "../img/icon4.png";
function Card() {
  return (
    <div className='Card' id='Card'>
      <div className="Card_type">
        <h3>WHY CHOOSE US</h3>
        <span>Problems trying to resolve the conflict between the two major realms</span>
        <span>of Classical physics: Newtonian mechanics </span>
      </div>
      <div className="card_for">
        <div className="card1">
           <img src={Icon} alt="" />
           <h3>3K</h3>
           <span>CASES DONE</span>

        </div>
        <div className="card2">
            <img src={Icon1} alt="" />
            <h3>45</h3>
            <span>HAPPY CUSTOMERS</span>
        </div>
        <div className="card3">
            <img src={Icon2} alt="" />
            <h3>12+</h3>
            <span>AWARD WINNING</span>
        </div>
        <div className="card4">
            <img src={Icon3} alt="" />
            <h3>1.5K</h3>
            <span>CASES DONE</span>
        </div>
      </div>
    </div>
  )
}

export default Card
