import React from 'react'
import Producte_header3 from "../../assets/Product_header3.png"
import "./Producte_header.scss"
import HeaderText from '../header_text/Header_text'
import Button from '../button/button'
import Boglanish from '../bog\'lanish/boglanish'
import Photo from "../../assets/phone.png"
import { AiOutlineRight } from "react-icons/ai"
function Producte_header() {
  return (
    <div className='Producte_header2'
      style={{ backgroundImage: `url(${Producte_header3})` }}
    ><div className="left">
        <div className="header_type">
          <HeaderText>We make Filling & Packaging
            Machines for <span> Food Industry</span></HeaderText>
          <h5>With our flexible production capacity and high technology, we produce customized solutions for your needs.</h5>
        </div>
        <div className="header_nur">
          <Button className="contain-btn">Get Started <AiOutlineRight />  </Button>
          <div className="header_num">
            <img src={Photo} alt="" />
            <div className="numtype">
              <Boglanish>
                <p>Sales Department</p>
                <h3>+0(850) 544 7514</h3>
              </Boglanish>
            </div>
          </div>

        </div>
      </div>
      <div className="right"></div>
    </div>

  )
}

export default Producte_header
