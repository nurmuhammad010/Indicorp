import React from "react";
import "./Icon.css";
import Illustration1 from "../img/Illustration.png";
import Illustration2 from "../img/Illustration2.png";
import Illustration3 from "../img/Illustration3.png";
function Icon() {
  return (
    <div className="icon">
      <div className="icon_card">
        <div className="icon_box">
          <img src={Illustration1} alt="" />
          <div>
            <div className="h1">
              <h1>1257</h1>
            </div>
            <div className="icon_type">
              <h1>𝙏𝙤𝙥</h1>
              <h1>𝘾𝙤𝙪𝙧𝙨𝙚𝙨</h1>
            </div>
            <div className="icon_type2">
              <span>Take courses from the world’s best</span>
              <span> instructors and universities. </span>
            </div>
          </div>
        </div>

        <div className="icon_box">
          <img src={Illustration2} alt="" />
          <div>
            <div className="h1">
              <h1>99981</h1>
            </div>
            <div className="icon_type">
              <h1>𝙃𝙖𝙥𝙥𝙮</h1>
              <h1> 𝙇𝙚𝙖𝙧𝙣𝙚𝙧𝙨</h1>
            </div>
            <div className="icon_type2">
              <span>Learners from all around </span>
              <span> the world. </span>
            </div>
          </div>
        </div>

        <div className="icon_box">
          <img src={Illustration3} alt="" />
          <div>
            <div className="h1">
              <h1>578</h1>
            </div>
            <div className="icon_type">
              <h1>𝙀𝙢𝙞𝙣𝙚𝙣𝙩 </h1>
              <h1> 𝙄𝙣𝙨𝙩𝙧𝙪𝙘𝙩𝙤𝙧𝙨</h1>
            </div>
            <div className="icon_type2">
              <span>Learn your favourite course with </span>
              <span>  world-class instructors. </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Icon;
