import React from "react";
import "./Card.scss";
import { BiAperture } from "react-icons/bi";
import { BiTimeFive } from "react-icons/bi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { RiChatPrivateFill } from "react-icons/ri";
import { BiBookReader } from "react-icons/bi";
import { BsHeartPulseFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
function Card() {
  return (
    <div className="card">
      <div className="icon_type_card">
        <div className="icon_box0">
          <div className="icon_box11"></div>
          <div className="icon_box2">
            <BiAperture />
          </div>
          <div className="icon_box11"></div>
        </div>
        <div className="type_card">
          <div className="card_type1">
            <h1>TAJRIBALI VA MALAKALI USTOZNI IZLAMASLIKNING OQIBATILARI</h1>
            <div>
              <h1 style={{ color: "red" }}>HAQIDA 6 TA FAKT</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="icon_cardd">
        <div className="icon_card">
          <div className="icon1">
            <h1>
              <BiTimeFive />
            </h1>
            <h2>Vaqtni yo`qotish</h2>
            <div className="gap">
              <span>Vaqtni yòqotish puxta oʻrganilmaganligi</span>
              <span>sababli yana qayta takror òrganish</span>
            </div>
          </div>
          <div className="icon1">
            <h1>
              <MdOutlineAttachMoney />
            </h1>
            <h2>Pul xarajati</h2>
            <div className="gap">
              <span>5 oyda puxta oʻrganish bir necha marta qisqa</span>
              <span>kurslarda chala oʻrgangandan koʻra</span>
              <span>samaraliroqdir</span>
            </div>
          </div>
          <div className="icon1">
            <h1>
              <RiChatPrivateFill />
            </h1>
            <h2 className="card_h2">Ta'limdan ko`ngli qolgan bola</h2>
            <div className="gap">
              <span>Ta'limdan ko`ngli qolgan bola jaholat</span>
              <span>botqoqligiga botadi va insoniyligini yo`qotadi.</span>
            </div>
          </div>
        </div>
        <div className="icon_card">
          <div className="icon1">
            <h1>
              <FaChalkboardTeacher />
            </h1>
            <h2>Qat'iy nazorat</h2>
            <div className="gap">
              <span>Qat'iy nazorat qilmagandan keyin dars</span>
              <span>qilinmaydi va bora - bora oʻrganishga ixlos</span>
              <span>soʻnib, qiyin degan fikrga borib qolinadi.</span>
            </div>
          </div>
          <div className="icon1">
            <h1>
              <BsHeartPulseFill />
            </h1>
            <h2>Til oʻrganish qiyin</h2>
            <div className="gap">
              <span>"Til oʻrganish qiyin", degan fikr miyada</span>
              <span>oʻrnashganidan soʻng oʻqishni tashlanadi.</span>
              <span>Aslida oʻquvchini yetarlicha qiziqtirilmaganligi</span>
              <span>va bu ustozning aybi ekanligini bilmaydi.</span>
              <span>(Yaponlarda bir maqol bor: "Aqlsiz bola yoʻq,</span>
              <span>koʻproq eʻtibor berilishi kerak bòlgan bola bor")</span>
            </div>
          </div>
          <div className="icon1">
            <h1>
              <BiBookReader />
            </h1>
            <h2>Ilm intizomi</h2>
            <div className="gap">
              <span>Bir mavzuni toʻliq o`rganmasdan turib</span>
              <span>boshqasiga o`tmaslik juda muhim va buni</span>
              <span>faqatgina malakali ustozlar bajara oladi.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
