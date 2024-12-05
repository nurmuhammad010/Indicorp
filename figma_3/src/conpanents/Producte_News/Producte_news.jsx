import React from 'react'
import Producte_news3 from "../../assets/Producte_news.png"
import Producte_news4 from "../../assets/Producte_news1.png"
import Producte_news5 from "../../assets/Producte_news2.png"
import HeaderText from '../header_text/Header_text'
import  Button from '../button/button'
import { AiOutlineRight } from "react-icons/ai"
import "./Producte_news.scss"
function Producte_News() {
  return (
    <div className='Producte_news'
    style={{ backgroundImage:`url(${Producte_news3})`}}            >
      <div className="news_type">
        <h5>COMPANY NEWS</h5>
<HeaderText >News from  <span>Crosson</span></HeaderText>
<h4>Cake pudding lollipop pastry cupcake chocolate. Gummi bears halvah sesame snaps </h4>
<h4>chocolate cake gummies sugar plum cotton candy cupcake sweet</h4>
      </div>
      <div className="news_card">
        <div className="card1">
            <img src={Producte_news4} alt="" />
        </div>
        <div className="card2">
          <div className="top_type">
            <h3>Crosson Holding’s 58th </h3>
            <h3>ordinary general assembl</h3>
            <h3>convened</h3>
          </div>
          <div className="center_type">
           <p>Toffee sweet roll caramels oat cake </p>
           <p>lemon drops cupcake sweet roll </p>
           <p>halvah ice cream.</p>
          </div>
          <Button   className=" contain-btn ">Read More  <AiOutlineRight /> </Button>
        </div>
        <div className="card3">
            <img src={Producte_news5} alt="" />
        </div>
        <div className="card4">
          <div className="Top_type">
          <h3>Crosson Holding’s new </h3>
          <h3>Board of Directors has been</h3>
          <h3>determined.</h3>
          </div>

       <div className="Center_type">
       <p>Toffee sweet roll caramels oat cake</p>
      <p>lemon drops cupcake sweet roll</p>
       <p>halvah ice cream.</p>
        </div>
        <Button  className=" contain-btn ">Read More  <AiOutlineRight /> </Button>
        </div>
      </div>
    </div>
  )
}

export default Producte_News;
