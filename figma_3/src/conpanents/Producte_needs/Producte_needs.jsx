import React from 'react'
import HeaderText from '../header_text/Header_text'
import Producte_needs3 from "../../assets/Producte_needs.png"
import Producte_needs4 from "../../assets/Icon6.png"
import Producte_needs5 from "../../assets/Producte_needs1.png"
import Producte_needs6 from "../../assets/Producte_needs2.png"
import Producte_needs7 from "../../assets/Producte_needs3.png"
import Producte_needs8 from "../../assets/Producte_needs4.png"
import Producte_needs9 from "../../assets/Producte_needs5.png"
import Producte_needs10 from "../../assets/Producte_needs6.png"
import Producte_needs11 from "../../assets/Producte_needs7.png"
import Producte_needs12 from "../../assets/Producte_needs8.png"
import numicon from "../../assets/phone.png"
import xat from "../../assets/Producte_needs9.png"
import Boglanish from '../bog\'lanish/boglanish'
import { AiOutlineRight } from "react-icons/ai"
import  calendar from "../../assets/Calindar.png"
import "./Producte_needs.scss"

function Producte_needs() {
  return (
    <div className=' Producte_needs' >
        <div className="Producte_neeeds_top"  style={{ backgroundImage:`url(${Producte_needs3})`}} >

     
        <div className="Producte_type">
      <h6>WHAT WE DO</h6>
      <div className="needs_type">
      <HeaderText>With our flexible production capacity and high technology, we <span> produce customized </span> solutions for your needs.</HeaderText>
      </div>
      <div className="header_num">
        <img src={Producte_needs4} alt="" />
        <div className="numtype">
            
          <h4>Producte_needs3</h4>
          <p>2.34Min, 14.7MB</p>
        </div>
      </div>
      </div>
      <div className="Producte_needs_card">
        <div className="card1">
          <img src={Producte_needs5} alt="" />
          <h5>Filling and Packaging</h5>
          <h5>Machines</h5>
        </div>
        <div className="card2">
          <img src={Producte_needs6} alt="" />
          <h5>of Line</h5>
          <h5>Solutions</h5>
        </div>
        <div className="card3">
          <img src={Producte_needs7} alt="" />
          <h5>Food Industry</h5>
          <h5>Machines Software</h5>
        </div>
        <div className="card4">
            <img src={Producte_needs8} alt="" />
            <h5>7/24 Techincal</h5>
            <h5>Support</h5>
        </div>
        <div className="card5">
             <img src={Producte_needs9} alt="" />
             <h5>Special Solutions</h5>
             <h5>Your Needs</h5>
        </div>
      </div>
    </div>
    <div className="Producte_needs_button">
      <div className="needs_left">
        <h3>Filling and Packaging Machines</h3>
        <p>Liquorice lemon drops powder chocolate liquorice candy dessert gummi bears. Caramels marzipan  </p>
        <p>donut jujubes sweet roll. Powder croissant toffee shortbread chocolate sweet pie  <span>Read more  <AiOutlineRight /></span></p>
        <div className="neeeds_cards">
          <div className="cards1">
            <img src={Producte_needs10} alt="" />
            <p>Linear Machines</p>
          </div>
          <div className="cards2">
               <img src={Producte_needs11} alt="" />
               <p>Rotary Machines</p>
          </div>
          <div className="cards3">
             <img src={Producte_needs12} alt="" />
             <p>Bottle Filling Machines</p>
          </div>
        </div>
      </div>
      <div className="needs_right">
      <div className="icon_type_img">
        <div className="icon_num">
          <div className="type_calendar">
            <div className="type_wrap">
              <h3>Let's Plan an</h3>
              <h3>Online Meeting</h3>
              <span>We are Available Now</span>
            </div>
            <img src={calendar} alt="" />
          </div>
        </div>
      <div className="typeNumber">
          <div className="typeText">
            <h3>Are you interested? Contact our</h3>
            <h3>sales department now</h3>
          </div>
           <div className="icon_num1">
           <img src={numicon} alt="" />
            <Boglanish>
              <p>Erkan giris / Sales Manager</p>
              <h3>+0(850) 544 7514</h3>
            </Boglanish>
           </div>
           <div className="icon_num1">
           <img src={xat} alt="" />
            <Boglanish>
              <p>Sales Department</p>
              <h3>sales@crosson.com</h3>
            </Boglanish>
           </div>
      </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Producte_needs
