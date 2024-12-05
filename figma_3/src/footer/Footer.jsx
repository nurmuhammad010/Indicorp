
import React from "react";
import "./Footer.scss";
import Footer1 from "../assets/footer.png";
import numicon from "../assets/phone.png";
import xat from "../assets/Producte_needs9.png";
import HeaderText from "../conpanents/header_text/Header_text";
import Boglanish from "../conpanents/bog'lanish/boglanish";
import Lokatsia from "../conpanents/Lokatsia/Lokatsia";
import endIcon from "../assets/endIcon.png";
import Button from "../conpanents/button/button";
import { AiOutlineRight } from "react-icons/ai";
function Footer() {
  return (
    <div className="footer" style={{ backgroundImage: `url(${Footer1})` }}>
      <div className="foter_flex_type">
        <div className="foter_type">
          <HeaderText>
            Have a <span>any questions?</span>
          </HeaderText>
          <h2>Contact Us</h2>
        </div>
        <div className="foter_number">
          <div className="icon_num1">
            <div className="img_foter">
              <img src={numicon} alt="" />
            </div>
            <Boglanish>
              <p>Erkan giris / Sales Manager</p>
              <h3>+0(850) 544 7514</h3>
            </Boglanish>
          </div>
          <div className="icon_num1">
            <div className="img_foter">
              <img src={xat} alt="" />
            </div>
            <Boglanish>
              <p>Sales Department</p>
              <h3>sales@crosson.com</h3>
            </Boglanish>
            
          </div>
          <Lokatsia></Lokatsia>
        </div>
      </div>

      <div className="foterType">
        <div className="foter_wrap">
          <h3>Products</h3>
          <span>Filling Machines</span>
          <span>Bottle Filling Series</span>
          <span>Package Machines</span>
          <span>Linear Machines</span>
          <span>Rotary Machines</span>
        </div>
        <div className="foter_wrap">
          <h3>Solutions</h3>
          <span>End of Line Solutions</span>
          <span>Food Industry Machines Software</span>
          <span>Research Solutions</span>
          <span>Conveyor Solutions</span>
          <span>Special Solutions Your Needs</span>
        </div>
        <div className="foter_wrap">
          <h3>Corporate</h3>
          <span>About Us</span>
          <span>Our Values</span>
          <span>Human Resorces</span>
          <span>News</span>
          <span>Contact</span>
        </div>
        <div className="foter_end">
          <div className="end_icon">
            <img src={endIcon} alt="" />
          </div>
          <div className="end_type">
            <h3> Career Opportunities</h3>
            <div className="type_span">
              <span>Cake pudding lollipop pastry cupcake chocolate. </span>
              <span>Gummi bears halvah sesame snaps.</span>
            </div>
            <Button className="contain-btn">
              Opennig Positions <AiOutlineRight />
            </Button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer;
