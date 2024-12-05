import React from "react";
import lokatsia1 from "../../assets/lokatsia.png";
import "./Lokatsia.scss"
export default function Lokatsia({ children }) {
  return (
    <div className="lokatsia">
      {children}
      <div className="lokatsia_icon">
        <img src={lokatsia1} alt="" />
      </div>
      <div className="lokatsia_type">
        <div>
        <span>Headquarters</span>
        <h5>One Apple Park Way; Cupertino</h5>
        <h5>CA 95014, U.S.A.</h5>
        </div>
        <div className="lokatsia_get">
       <span>Get Direction</span>
      </div>
      </div>
     
    </div>
  );
}