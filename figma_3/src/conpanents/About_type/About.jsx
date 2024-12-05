import React from 'react'
import About from "../../assets/Abaut.png"
import { AiOutlineRight } from "react-icons/ai"
import HeaderText from '../header_text/Header_text'
import About3 from "../../assets/About1.png"
import About2 from "../../assets/About2.png"
import About4 from  "../../assets/Ellipse 1.png";
import About5 from  "../../assets/Ellipse 2.png";
import About6 from  "../../assets/Ellipse 3.png";
import About7 from  "../../assets/Ellipse 4.png";
import About8 from  "../../assets/Ellipse 5.png";
import About9 from  "../../assets/Ellipse 6.png";
import About10 from  "../../assets/Ellipse 7.png";
import About11 from  "../../assets/Ellipse 8.png";
import About12 from  "../../assets/Ellipse 9.png";
import About13 from  "../../assets/Ellipse 10.png";
import About14 from  "../../assets/Ellipse 11.png";
import About15 from  "../../assets/Ellipse 12.png";
import About16 from  "../../assets/Ellipse 14.png";
import About17 from  "../../assets/Ellipse 15.png";
import About18 from  "../../assets/Ellipse 16.png";
import About19 from  "../../assets/Ellipse 17.png";
import About20 from  "../../assets/Ellipse 13.png";
import About21 from  "../../assets/Ellipse 19.png";
import About22 from  "../../assets/Ellipse 20.png";
import About25 from  "../../assets/Ellipse 21.png";
import About24 from  "../../assets/Ellipse 22.png";
import "./About.scss"
function About1() {
  return (
    <div className='About' style={{ backgroundImage: `url(${About})` }} >
      <div className='About_type'>
        <div className="Us">
          <h1>About Us</h1>
          <div className="About_carsson">
            <span>Home <AiOutlineRight /> </span>
            <span>  Corporate   <AiOutlineRight /> </span>
            <span>   About Crosson</span>
          </div>
        </div>
        <div className="At">
          <HeaderText >At the roots of Crosson, there is 20 years of experience in food industry that is filled with research, </HeaderText>
          <HeaderText >increasing efficiency and producing solution for food  <span>quality, automation and software.</span></HeaderText>
        </div>
        <div className="donit">
          <p>Donut candy shortbread toffee dragée apple pie brownie. Muffin chocolate halvah bonbon gummies cake apple pie. Croissant dessert candy canes chocolate bar </p>
          <p>topping jujubes cupcake toffee dragée. Fruitcake danish tart gummies tootsie roll dragée cheesecake jujubes. Fruitcake powder marzipan dessert dessert oat cake </p>
          <p>candy. Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes brownie danish pudding jelly gummies. </p>
        </div>
        <div className="Tofii">
          <p>Toffee jelly caramels macaroon bonbon dragée muffin halvah. Pudding icing gingerbread sugar plum powder marzipan. Cotton candy carrot cake pastry carrot cake jelly</p>
          <p>danish. Ice cream muffin marshmallow sesame snaps pie cupcake tart. Lemon drops macaroon lemon drops chocolate cookie cupcake marshmallow donut. Cotton </p>
          <p>candy candy canes cake oat cake jelly.</p>
        </div>
      </div>
      <div className="About_card">
        <div className="left_card">
          <div className="Crosson">
            <h5>OUR VALUES</h5>
            <HeaderText >Crosson has adopted</HeaderText>
            <HeaderText >Quality Production as its</HeaderText>
            <HeaderText > <span>basic principle.</span></HeaderText>
          </div>
          <div className="to_be">
            <p>To be one of the pioneering, dynamic and leading companies that </p>
            <p>offer quality products and services with an understanding of </p>
            <p>continuous improvement in the fields in which it operates</p>
          </div>
          <span><ins>Quality Certificates</ins></span>
        </div>
        <div className="right_card">
          <div className="card1">
            <div className="Image1">
              <img src={About3} alt="" />
            </div>
            <div className="mission1">
              <h3>Our Mission</h3>
              <p>Center we have developped many </p>
              <p>patents in filling and packaging </p>
              <p>technology.</p>
            </div>
            <div className="Reader1">
              <span>Read More <AiOutlineRight /></span>
            </div>
          </div>
          <div className="card_2">
            <div className="Image2">
              <img src={About2} alt="" />
            </div>
            <div className="mission2">
              <h3>Our Vision</h3>
              <p>Marshmallow pastry jelly beans</p>
              <p>chocolate bar cake pastry powder </p>
              <p>gummi bears. </p>
            </div>
            <div className="Reader2">
            <span>Read More <AiOutlineRight /></span>
            </div>
          </div>
        </div>
      </div>
      <div className="About_image">
        <div className="image_type">
          <h5>PARTNERS</h5>
          <div className="image_left">
             <HeaderText > Ask our  <span>happy customers </span></HeaderText>
             <HeaderText > about our quality</HeaderText>
          </div>
          <div className="image_right">
             <div className="">
               <p>To be one of the pioneering, dynamic and leading companies that offer quality</p>
               <p>products and services with an understanding of continuous improvement in</p>
               <p>the fields in which it operates.</p>    
             </div>
             <div className="image_right_buton">
                <h4>Erkan Giris, EG Theme</h4>
             </div>
</div>
        </div>
        <div className="imge">
           <img src={About4} alt="" />
           <img src={About5} alt="" />
           <img src={About6} alt="" />
           <img src={About7} alt="" />
           <img src={About8} alt="" />
           <img src={About9} alt="" />
           <img src={About10} alt="" />
           <img src={About11} alt="" />
           <img src={About12} alt="" />
           <img src={About13} alt="" />
           <img src={About14} alt="" />
           <img src={About15} alt="" />
           <img src={About16} alt="" />
           <img src={About17} alt="" />
           <img src={About18} alt="" />
           <img src={About19} alt="" />
           <img src={About20} alt="" />
           <img src={About21} alt="" />
           <img src={About22} alt="" /> 
            <img src={About25} alt="" />
           <img src={About24} alt="" />
           <div className="Box">
            <h4>Become
Partner</h4>
           </div>
        </div>
      </div>
    </div>
  )
}

export default About1;
