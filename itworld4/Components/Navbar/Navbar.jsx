import React from "react";
import { BiMenu } from "react-icons/bi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// import { IoMdCloseCircle } from "react-icons/io";
import "./NavResponsiv.css";
import "./Navbar.css";
import navbarimg from "../img/Navbarimg.png";
import aylana1 from "../img/aylana1.png";
import aylana2 from "../img/aylana2.png";

function Navbar() {
  return (
    <div className="container">
      <div className="navbar_1">
        <div className="navbar">
          <div className="navbar_card">
            <div className="navbar_logo">
              <h2>ɪᴛ ᴡᴏʀʟᴅ</h2>
            </div>
            <div className="menu1">
              <h1>
                <a href="#menu">
                  <BiMenu />
                </a>
              </h1>
              <div className="nav_button">
                <button className="nav-btn">Ro'yhatdan O'tish</button>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="popover" id="menu">
              <div className="content">
                <a href="#" className="close"></a>

                <nav className="nav">
                  <ul className="nav_list">
                    <div className="nav_list_item">
                      <li>Kerakli Bo'limni Tanlang</li>
                    </div>
                    <div className="nav_list_item">
                      <li>Oquv Markazi</li>
                    </div>
                    <div className="nav_list_item">
                      <li>Oqituvchilar</li>
                    </div>
                    <div className="nav_list_item">
                      <li>Kurslar</li>
                    </div>
                    <div className="nav_list_item">
                      <li>Aloqa Markazi</li>
                    </div>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="aylana_box">
            <div
              className="aylana"
              style={{ backgroundImage: `url(${aylana1})` }}
            >
              <img src={aylana2} alt="" />
            </div>
          </div>
          <div className="navbar_image_card_flex">
            <div
              className="navbar_image_card"
              style={{ backgroundImage: `url(${navbarimg})` }}
            >
              <div className="navbar_img_type_card">
                <div className="navbar_img_type">
                  <h1>
                    𝖶𝖾 <span>𝖾𝗆𝗉𝗈𝗐𝖾𝗋</span> 𝗒𝗈𝗎
                  </h1>
                  <h1>𝗍𝗈 𝗅𝖾𝖺𝗋𝗇 𝗐𝗁𝖺𝗍 𝗒𝗈𝗎 𝗅𝗈𝗏𝖾.</h1>
                </div>
              </div>
            </div>
            <div className="navbar_img_right_card">
              <div className="navbar_img_right">
                <h1>03</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="end_box">
        <div className="end_card">
          <div className="end">
            <div className="end_type">
              <h3>250,998 people are learning with us</h3>
            </div>
            <div className="end_type2">
              <h5>LEARN MORE </h5>
              <h2>
                <HiOutlineArrowNarrowRight />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
