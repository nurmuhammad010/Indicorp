import React from 'react'
import HeaderText from "../header_text/Header_text"
import Producte1_desgin from "../../assets/Producte1_desgin.png"
import Producte_desgin1 from "../../assets/Producte_desgin1.png"
import Producte_desgin2 from "../../assets/Producte_desgin2.png"
import { AiOutlineRight } from "react-icons/ai"
import "./Producte_desgin1.scss"
function Producte_desgin() {
  return (
    <div className='Producte_desgin12'>
      <div className="desgin_type">
           <h5>HOW WE DO</h5>
         <HeaderText >A journey from <span>design to product.</span>
</HeaderText>
<h4>Starting from the planning of the product our customer wants; design, manufacturing, </h4>
<h4>software, mounting, installation & comissioning are made by us</h4>
      </div>
      <div className="desgin_card">
        <div className="card1">
         <img src={Producte1_desgin} alt="" />
         <div className="card_type">
           <h3>Product Design</h3>
           <p>Toffee sweet roll caramels oat cake </p>
           <p>lemon drops cupcake sweet roll</p>
           <p>halvah ice cream.</p>
         </div>
         <span>Read More   <AiOutlineRight/></span>
        </div>
        <div className="card2">
            <img src={Producte_desgin1} alt="" />
            <div className="card_type">
            <h3>Planing & Production</h3>
            <p>Center we havedevelopped many </p>
            <p>patents in filling and packaging </p>
            <p>technology.</p>
            </div>
            <span>Read More   <AiOutlineRight/></span>

        </div>
        <div className="card3">
           <img src={Producte_desgin2} alt="" />
            <div className="card_type">
               <h3>Installation & Comisioning</h3>
               <p>Marshmallow pastry jelly beans</p>
               <p>chocolate bar cake pastry powder </p>
               <p>gummi bears. </p>
            </div>
             <span>Read More   <AiOutlineRight/></span>
        </div>
      </div>
    </div>
  )
}

export default Producte_desgin;
