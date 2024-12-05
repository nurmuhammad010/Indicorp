import React from "react";
import "./contact.scss";
import HeaderText from "../header_text/Header_text";
import Button from "../button/button"
import { AiOutlineRight } from "react-icons/ai";
import background from "../../assets/Abaut.png";
function ContactUs2() {
  return (
    <div className="contact2" style={{ backgroundImage: `url(${background})` }}>
      <div className="contact2_box1">
        <div className="contact2_type1">
          <h2>Contact Us</h2>
        </div>
        <div className="contact2_type2">
          <span>Home </span>
          <span>Contact Us</span>
        </div>
      </div>

      <div className="contact2_box2">
        <div className="contact2_type3">
          <HeaderText>
            Interested in our <span>Machine & Software</span> services or need
            advice? Then please{" "}
          </HeaderText>
          <h2>get in touch and we’ll be glad to help.</h2>
        </div>
      </div>

      <div className="contact2_cardlar">
        <div className="contact2_card">
          <div className="contact2_type4">
            <h3>Contact Informations</h3>
            <span>Get in touch and let us know </span>
            <span>how we can help</span>
          </div>
          <div className="contact2_type5">
            <h6>PHONE</h6>
            <h3>+0(850) 544 7514</h3>
          </div>
          <div className="contact2_type5">
            <h6>MAIL</h6>
            <h3>hello@crosson.com</h3>
          </div>
          <div className="contact2_type5">
            <h6>ADDRESS</h6>
            <h3>One Apple Park Way; Cupertino CA</h3>
            <h3> 95014, U.S.A.</h3>
          </div>
         
        </div>

        <div className="contact2_card_end">
          <div className="contact2_card_end2">
            <h3>Contact Form</h3>
            <span>Get in touch and let us know how we can help</span>
          </div>

          <div className="contact2_input">
            <input type="text" placeholder="Name Surname" />
            <input type="text" placeholder="E-Mail Address" />
            <input type="text" placeholder="Phone Number" />
            <input type="text"placeholder="Your Company" />
          </div>
          <div>
           <textarea placeholder="Your Message" cols="80" rows="5"></textarea>
          </div>
        </div>
        
      </div>
      <div className="end_button">
          <div className="end_button1">
          <Button className="btn-button">Get Direction <AiOutlineRight  /></Button>
          <span>See on Map</span>
          </div>
         <Button className="btn-button">Submit <AiOutlineRight /></Button>
        </div>
    </div>
  );
}

export default ContactUs2;