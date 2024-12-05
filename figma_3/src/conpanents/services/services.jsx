import React from "react";
import "./services.scss";
import background from "../../assets/Abaut.png";
import { BiCheck } from "react-icons/bi";
import {FiChevronRight} from "react-icons/fi"
import HeaderText from "../header_text/Header_text";
import services1 from "../../assets/Icon14.png";
import services2 from "../../assets/Icon15.png";
import services3 from "../../assets/Icon16.png";
import services4 from "../../assets/Icon17.png";
import Company from "../../assets/Company logo.png";
import Company2 from "../../assets/Company logo (2).png";
import Company3 from "../../assets/Company logo (3).png"
import Company4 from "../../assets/Company logo (4).png"
import Company5 from "../../assets/Company logo (5).png"
import Company6 from "../../assets/Company logo (6).png"
import Company7 from "../../assets/Company logo (7).png"
import Company8 from "../../assets/Company logo (8).png"
import Company9 from "../../assets/Company logo (9).png"
import Company10 from "../../assets/Company logo (10).png"
// import Company11 from "../img/Company logo (11).png"
// import Company12 from "../img/Company logo12.png"

function Servicess() {
  return (
    <div className="services" style={{ backgroundImage: `url(${background})` }}>
      <div className="services_type">
        <h1>Services</h1>
        <div className="services_type2">
          <span>Home </span>
          <span>Services</span>
        </div>
      </div>
      <div className="services_type3_flex">
        <div className="services_type3">
          <h2>
            Since our machines are produced in compliance with the difficult
            conditions that can be operated 24/7,{" "}
          </h2>
          <HeaderText>
            the <span> possibility of malfunction are very low.</span>
          </HeaderText>
        </div>
        <div className="services_type_span">
          <span>
            Donut candy shortbread toffee dragée apple pie brownie. Muffin
            chocolate halvah bonbon gummies cake apple pie. Croissant dessert
            candy canes chocolate bar{" "}
          </span>
          <span>
            topping jujubes cupcake toffee dragée. Fruitcake danish tart gummies
            tootsie roll dragée cheesecake jujubes. Fruitcake powder marzipan
            dessert dessert oat cake{" "}
          </span>
          <span>
            candy. Sweet roll sweet roll gummi bears tootsie roll dragée. Candy
            canes brownie danish pudding jelly gummies.{" "}
          </span>
        </div>
      </div>
      <div className="services_type_span_width">
        <div className="services_type_span">
          <span>
            <BiCheck /> Danish lemon drops sweet soufflé jelly-o wafer
            gingerbread muffin.
          </span>
          <span>
            <BiCheck /> Marshmallow caramels chocolate jelly-o sweet roll jelly
            beans cake sweet. .
          </span>
          <span>
            <BiCheck /> Donut pastry apple pie ice cream dragée cheesecake
          </span>
        </div>
      </div>

      <div className="services_type5">
        <div className="services_type6">
          <h4>EXPLORE SERVICES</h4>
          <h2>We offer high quality machine manufacturing </h2>
          <HeaderText>
            and <span> software services</span>
          </HeaderText>
        </div>
      </div>

      <div className="services_type6_flex">
        <div className="services_type6">
          <span>
            To be one of the pioneering, dynamic and leading companies that
            offer quality products and services with an understanding of{" "}
          </span>
          <span>
            continuous improvement in the fields in which it operates.
          </span>
        </div>
      </div>
      <div className="services_cardlar">
        <div className="services_card">
          <img src={services1} alt="" />
          <h3>Company Work Managment Software</h3>
          <div>
            <span>Center we have developped many </span>
            <span>patents in filling and packaging </span>
            <span>technology.</span>
          </div>
          <div className="services_icon">
            <h4>Read More</h4>
            <h4><FiChevronRight/></h4>
          </div>
        </div>
        <div className="services_card">
          <img src={services2} alt="" />
          <h3>Crosson Simple Storage Service (S3)</h3>
          <div>
            <span>Marshmallow pastry jelly beans </span>
            <span>chocolate bar cake pastry powder </span>
            <span>gummi bears. </span>
          </div>
          <div className="services_icon">
            <h4>Read More</h4>
            <h4><FiChevronRight/></h4>
          </div>
        </div>
        <div className="services_card">
          <img src={services3} alt="" />
          <h3>Machine Access Salary Contol Sowftare</h3>
          <div>
            <span>Center we have developped many </span>
            <span>patents in filling and packaging </span>
            <span>technology.</span>
          </div>
          <div className="services_icon">
            <h4>Read More </h4>
            <h4><FiChevronRight/></h4>
          </div>
        </div>
        <div className="services_card">
          <img src={services4} alt="" />
          <h3>Scalable Storage in th Cloud Service</h3>
          <div>
            <span>Marshmallow pastry jelly beans </span>
            <span>chocolate bar cake pastry powder </span>
            <span>gummi bears. </span>
          </div>
          <div className="services_icon">
            <h4>Read More</h4>
            <h4><h4><FiChevronRight/></h4></h4>
          </div>
        </div>
      </div>
        <div className="services_type7">
                <div className="services_type8">
                 <HeaderText>Crosson, Trusted by over <span>1,000 businesses</span></HeaderText>
                 <h2>of all sizes</h2>
                </div>
         </div>
         <div className="services_type9_flex">
        <div className="services_type9">
          <span>
            To be one of the pioneering, dynamic and leading companies that
            offer quality products and services with an understanding of{" "}
          </span>
          <span>
            continuous improvement in the fields in which it operates.
          </span>
        </div>
      </div>
      <div className="services_box">
      <div className="services_cardlar2">
         <div className="services_card2">
            <img src={Company} alt="" />          
         </div>
         <div className="services_card2">
          <img src={Company2} alt="" />
         </div>
         <div className="services_card2">
         <img src={Company3} alt="" />      
         </div>
         <div className="services_card2">
         <img src={Company4} alt="" />      
         </div>
         <div className="services_card2">
         <img src={Company5} alt="" />      
         </div>
         <div className="services_card2">
         <img src={Company6} alt="" />      
         </div>
         <div className="services_card2">
         <img src={Company7} alt="" />      
         </div>
         <div className="services_card2">
         <img src={Company8} alt="" />      
         </div>
         <div className="services_card2">
         <img src={Company9} alt="" />      
         </div>
         <div className="services_card2">
         <img src={Company10} alt="" />      
         </div>
         {/* <div className="services_card2">
         <img src={Company11} alt="" />      
         </div>
         <div className="services_card2">
          <img src={Company12} alt="" />
         </div> */}
       </div>      
       </div>
    </div>
  );
}

export default Servicess;