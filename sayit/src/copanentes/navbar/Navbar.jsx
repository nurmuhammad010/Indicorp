import React, { useState } from "react";
import "./Navbar.css";
// import "./NavbarMediya.css";
// import "./Navbar-keyframes.css";
import { Link } from "react-scroll";
import cover from "../img/cover.png";
import iconca from "../img/iconca.png";
import iconca1 from "../img/iconca1.png";
import iconca2 from "../img/iconca2.png";
const Navbar = () => {
  const [active, setActive] = useState(true);

  const handleChange = () => {
    setActive(active ? false : true);
  };

  return (
    <div className="Navbarbox">
      <div className="rasm">
        <img src={cover} alt=""  />
      </div>
      <div className="navbar" id="Navbar">
        <div className="logo">
          <h3>Indicorp</h3>
        </div>
        <div className="nav">
          <ul className="menu">
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="Card"spy={true} smooth={true} > Choose</Link>
            </li>
            <li>
              <Link activeClass="active" to="product" spy={true} smooth={true}>
                Product
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="practive" spy={true} smooth={true}>
                Practive
              </Link>
            </li>
            <li>
            <Link activeClass="active" to="Touch" spy={true} smooth={true}>
                get_in_touch  
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="foter" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="menu2">
            <ul className={active ? "none" : "mobile-menu"}>
              <li>Home</li>
              <li>
                <Link
                  activeClass="active"
                  to="product"
                  spy={true}
                  smooth={true}
                >
                  Product
                </Link>
              </li>
              <li>Testimonial</li>
              <li>Contact</li>
              <li>nurmuhammad</li>
            </ul>
            <div className="icon">
              <button onClick={() => handleChange()}>Open</button>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="type">
          <h1>EMPOWER YOUR BUSINESS</h1>
          <span>We Know How Laarge Object will a</span>
          <span>ct but thing on A small scale.</span>
          <div className="button">
            <button>Get Qoute Now</button>
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="box1">
          <div className="type1">
            <div className="iconca">
              <img src={iconca} alt="" />
            </div>
            <h3>Digital Marketing</h3>
            <span>We focus on ergonomic and </span>
            <span>meeting you where you work</span>
          </div>
        </div>
        <div className="box1">
          <div className="type1">
            <div className="iconca">
              <img src={iconca1} alt="" />
            </div>
            <h3>National top 50 firms</h3>
            <span>Just type what's on your mind</span>
            <span>And We'll get you there</span>
          </div>
        </div>
        <div className="box1">
          <div className="type2">
            <div className="iconcaa">
              <img src={iconca2} alt="" />
            </div>
            <h3>Digital Marketing</h3>
            <span>The quisk fox jumps</span>
            <span>over the lazy dog</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;