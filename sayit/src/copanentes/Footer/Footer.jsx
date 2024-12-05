import React from "react";
import "./Footer.css";
// import "./Foter-Media.css";
import getcall from "../img/getcall.png";
import getlocatsia from "../img/getlokatsia.png";
import gettelegram from "../img/gettelegram.png";
import facebook from "../img/fecebook.png";
import instagram from "../img/instagram.png";
import twitter from "../img/twitter.png";
import youtube from "../img/youtube.png";
function Footer() {
  return (
    <div className="footer" id="foter">
      <div className="foterbox">
        <div className="fotertype">
          <h2>Consulting Agency For Your Business</h2>
          <span>the quick fox jumps over the lazy 
            dog</span>
            <div className="foterbutton">
          <button>Contact Us</button>
        </div>
        </div>
        
      </div>

      <div className="fotercard">
        <div className="fotercard-type">
          <div className="foter-card-type">
            <span>Company Info</span>
            <span>About Us</span>
            <span>Carrier</span>
            <span>We are hiring</span>
            <span>Blog</span>
          </div>

          <div className="foter-card-type">
            <span>Legal</span>
            <span>About Us</span>
            <span>Carrier</span>
            <span>We are hiring</span>
            <span>Blog</span>
          </div>
          <div className="foter-card-type">
            <span>Features</span>
            <span>Business Marketing</span>
            <span>User Analytic</span>
            <span>Live Chat</span>
            <span>Unlimited Support</span>
          </div>
          <div className="foter-card-type">
            <span>Resources</span>
            <span>IOS & Android</span>
            <span>Watch a Demo</span>
            <span>Customers</span>
            <span>API</span>
          </div>
          <div className="foter-card-type2">
            <span>Touch</span>
            <div className="icon-type-foter">
              <img src={getcall} alt="" />
              <span>(480) 555-0103</span>
            </div>
            <div className="icon-type-foter">
              <img src={getlocatsia} alt="" />
              <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
            </div>
            <div className="icon-type-foter">
              <img src={gettelegram} alt="" />
              <span>debra.holt@example.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="foter-bottom">
        <span>Made With Love By Figmaland All Right Reserved </span>
        <div className="bottom-icon-foter">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
          <img src={youtube} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;