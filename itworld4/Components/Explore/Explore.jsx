import React from "react";
import "./Explore.css";
// import explore1 from "../img/explore1.png";
// import explore2 from "../img/explore2.png";
import explor_icon1 from "../img/explor_icon1.png";
import explor_icon2 from "../img/explor_icon2.png";
import explor_icon3 from "../img/explor_icon3.png";
import explor_icon4 from "../img/explor_icon4.png";
import explor_icon5 from "../img/explor_icon5.png";
import explor_icon6 from "../img/explor_icon6.png";
import explor_icon7 from "../img/explor_icon7.png";
import explor_icon8 from "../img/explor_icon8.png";
function Explore() {
  return (
    <div className="explore">
      <div className="explore_card">
        <div className="explore_type_box">
          <h3>EXPLORE EDUPRIX</h3>
        </div>
        {/* <div className="explore_border_card">
          <div
            className="explore_border"
            style={{ backgroundImage: `url(${explore1})` }}>
              <div className="explore_border2" style={{backgroundImage: `url(${explore2})`}}></div>
            </div>
        </div> */}
      </div>

      <div className="explore_end_card">
        <div className="explore_card_end">
          <div className="explore_end">
            <img src={explor_icon1} alt="" />
            <div className="type">
              <h3>Data Science</h3>
              <span>78 Courses</span>
            </div>
          </div>
          <div className="explore_end">
            <img src={explor_icon2} alt="" />
            <div className="type">
              <h3>Business &</h3>
              <h3> Management</h3>
              <span>67 Courses</span>
            </div>
          </div>
          <div className="explore_end">
            <img src={explor_icon3} alt="" />
            <div className="type">
              <h3>Language</h3>
              <span>85 Courses</span>
            </div>
          </div>
          <div className="explore_end">
            <img src={explor_icon4} alt="" />
            <div className="type">
              <h3>Information</h3>
              <h3>Technology</h3>
              <span>98 Courses</span>
            </div>
          </div>
          <div className="explore_end">
            <img src={explor_icon5} alt="" />
            <div className="type">
             <h3>Film & Media</h3>
             <span>68 Courses</span>
            </div>
          </div>
          <div className="explore_end">
            <img src={explor_icon6} alt="" />
            <div className="type">
             <h3>Math & Logic</h3>
             <span>876 Courses</span>
            </div>
          </div>
          <div className="explore_end">
            <img src={explor_icon7} alt="" />
            <div className="type">
             <h3>Health & </h3>
             <h3>Medical</h3>
             <span>79 Courses</span>
            </div>
          </div>
          <div className="explore_end">
            <img src={explor_icon8} alt="" />
            <div className="type">
             <h3>Design & </h3>
             <h3>Creative</h3>
             <span>37 Courses</span>
            </div>
          </div>
        </div>
      </div>
      <div className="endd">
       <h4>See All</h4>
       </div>
    </div>
  );
}

export default Explore;
