import React from 'react'
import "./Producte_Food.scss"
import  Button from '../button/button'
import HeaderText from '../header_text/Header_text'
import Producte_foot from "../../assets/Producte_food.png"
import Producte_foot1 from "../../assets/Icon4.png"
import Producte_foot2 from "../../assets/Icon5.png"
import { AiOutlineRight } from "react-icons/ai"
function Producte_Food() {
  return (
    <div className='Producte_food'>
       
      <div className="left">
      <h5>WHO WE ARE</h5>
      <HeaderText>Crosson is an international group 
dedicated to the <span> food industry.</span></HeaderText>
<h5>Crosson has twenty years’ experience in food, quality, automation and software which has been established in the food sector for Research, Efficiency and Solution Production.

 </h5>
<h5>It was not long to discover that supported to knowledge by scientific perspectives, would be the solution to the real needs of the sector.</h5>
<div className="abaut_us">
    <Button className=" contain-btn ">About Us   <AiOutlineRight /> </Button>
    <span>Quality Certificates</span>
</div>
      </div>
      <div className="right">
      <div className="header_num">
        <img src={Producte_foot} alt="" />
        <div className="numtype">
          <h4>Exported to 24 Countries</h4>
          <p>168 companies in 24 countries use our machines</p>
        </div>
      </div>
      <div className="header_num">
        <img src={Producte_foot1} alt="" />
        <div className="numtype">
          <h4>8 Billion Products Per Day</h4>
          <p>8 billion products are produced daily from our machines.</p>
        </div>
      </div>
      <div className="header_num">
        <img src={Producte_foot2} alt="" />
        <div className="numtype">
          <h4>We touch 850 million people a day</h4>
          <p>850 million people use products made by their machines every day</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Producte_Food
