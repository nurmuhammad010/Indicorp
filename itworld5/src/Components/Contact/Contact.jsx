import React from "react";
import "./Contact.css";
import contactIMG from "../img/contact1.png";
export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact_img_card">
        <img src={contactIMG} alt="" />
      </div>
      <div className="contact_card">
        <div className="contact_type">
         <h1>​🇬​​🇪​​🇹​ ​🇷​​🇪​​🇬​​🇺​​🇱​​🇦​​🇷​</h1>
          <h2>​🇺​​🇵​​🇩​​🇦​​🇹​​🇪​​🇸​ ​🇫​​🇷​​🇴​​🇲​</h2>
        </div>
        <div className="contact_type2">
        <h2>ɪᴛ ᴡᴏʀʟᴅ</h2>
        </div>
        <div className="input_card">
         <h3>ꜱᴜʙꜱᴄʀɪʙᴇ ᴛᴏ ɴᴇᴡꜱʟᴇᴛᴛᴇʀ</h3>
         <input type="email" placeholder="ᴇᴍᴀɪʟ" />
         <input type="password" placeholder="ᴘᴀꜱꜱᴡᴏʀᴅ" />
         <input type="number"  placeholder="ɴᴜᴍʙᴇʀ"/>
         <button className="contact_btn">ꜱᴜʙꜱᴄʀɪʙᴇ</button>
        </div>
      </div>
    </div>
  );
}
