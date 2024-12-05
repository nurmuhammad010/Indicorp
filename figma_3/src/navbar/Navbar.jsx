import React from 'react'
import { Link } from 'react-router-dom'
import NavbarData from '../mock/NavbarData'
import "./navbar.scss"
import Phone from '../assets/phone.png'
import Boglanish from "../conpanents/bog'lanish/boglanish"
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
// import Flag from "../assets/flag.png"
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar_contant">
        <div className="header_num">
        <img src={Phone} alt="" />
        <div className="numtype">
          <Boglanish>
          <p>Do you need help?</p>
          <h3>+0(850) 544 7514</h3>
          </Boglanish>
        </div>
      </div>
    
            <div className="logo">
                <h1>Crosson</h1>
            </div>
            <div className="icon">
       <h3> <AiOutlineLinkedin /></h3>
       <h3> <AiOutlineInstagram/>  </h3>
       <h3> <AiOutlineTwitter/></h3>
       <select>
        <option style={{backgroundImage:`url({Flag})`}}>Eng</option>
        <option value="">rus</option>
        <option value="">uzb</option>
         
        </select>
            </div>
            </div>
            <ul className="menu">
                {
                    NavbarData.map(i => (
                        <Link key={i.id} to={i.link} ><li className="link-item">{i.title}</li></Link>
                    ))
                }
            </ul>
        </div>
    )
}
