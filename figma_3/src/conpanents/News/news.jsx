import React from "react";
import background from "../../assets/Abaut.png";
import news2image1 from "../../assets/Image8.png";
import news2image2 from "../../assets/Image9.png";
import news2image3 from "../../assets/Image10.png";
import news2image4 from "../../assets/Image11.png";
import news2image5 from "../../assets/Image12.png";
import news2image6 from "../../assets/Image13.png";
import "./news.scss";
import Button from '../button/button'
import { AiOutlineRight } from "react-icons/ai";
function News2() {
  return (
    <div className="news2" style={{ backgroundImage: `url(${background})` }}>
      <div className="news2_box">
        <div className="news2_type1">
          <h2>News</h2>
          <div className="news2_type2">
            <span>Home</span>
            <span>News</span>
          </div>
        </div>
      </div>

      <div className="news2_cardlar">
        <div className="news2_cardlar2">
          <div className="news2_cardvs">
            <img src={news2image1} alt="" />
          </div>
          <div className="news2_box3">
            <div className="news2_type3">
              <h3>Crosson Holding’s 58th </h3>
              <h3>ordinary general assembly </h3>
              <h3>convened</h3>
            </div>
            <div className="news2_type4">
              <span>Toffee sweet roll caramels oat cake </span>
              <span>lemon drops cupcake sweet roll </span>
              <span>halvah ice cream.</span>
            </div>
            <Button className="contain-btn">
              Read More <AiOutlineRight />
            </Button>
          </div>
        </div>
        <div className="news2_cardlar2">
          <div className="news2_cardvs">
            <img src={news2image2} alt="" />
          </div>
          <div className="news2_box3">
            <div className="news2_type3">
              <h3>Crosson Holding’s 58th </h3>
              <h3>ordinary general assembly </h3>
              <h3>convened</h3>
            </div>
            <div className="news2_type4">
              <span>Toffee sweet roll caramels oat cake </span>
              <span>lemon drops cupcake sweet roll </span>
              <span>halvah ice cream.</span>
            </div>
            <Button className="contain-btn">
              Read More <AiOutlineRight />
            </Button>
          </div>
        </div>
        <div className="news2_cardlar2">
          <div className="news2_cardvs">
            <img src={news2image3} alt="" />
          </div>
          <div className="news2_box3">
            <div className="news2_type3">
              <h3>Crosson Holding’s 58th </h3>
              <h3>ordinary general assembly </h3>
              <h3>convened</h3>
            </div>
            <div className="news2_type4">
              <span>Toffee sweet roll caramels oat cake </span>
              <span>lemon drops cupcake sweet roll </span>
              <span>halvah ice cream.</span>
            </div>
            <Button className="contain-btn">
              Read More <AiOutlineRight />
            </Button>
          </div>
        </div>
        <div className="news2_cardlar2">
          <div className="news2_cardvs">
            <img src={news2image4} alt="" />
          </div>
          <div className="news2_box3">
            <div className="news2_type3">
              <h3>Crosson Holding’s 58th </h3>
              <h3>ordinary general assembly </h3>
              <h3>convened</h3>
            </div>
            <div className="news2_type4">
              <span>Toffee sweet roll caramels oat cake </span>
              <span>lemon drops cupcake sweet roll </span>
              <span>halvah ice cream.</span>
            </div>
            <Button className="contain-btn">
              Read More <AiOutlineRight />
            </Button>
          </div>
        </div>
        <div className="content">
        <div className="cardlar2">
          <div className="cardvs">
            <img src={news2image5} alt="" />
          </div>
          <div className="box3">
            <div className="type3">
            <h3>Crosson Holding’s 58th </h3>
              <h3>ordinary general assembly </h3>
              <h3>convened</h3>
              </div>
           
            <div className="type4">
              <span>Toffee sweet roll caramels oat cake </span>
              <span>lemon drops cupcake sweet roll </span>
              <span>halvah ice cream.</span>
            </div>
            <Button className="contain-btn">
              Read More <AiOutlineRight />
            </Button>

          </div>
          </div>
     
        <div className="cardlar3">
          <div className="cardvs">
            <img src={news2image6} alt="" />
          </div>
          <div className="box4">
            <div className="type5">
              <h3>Crosson Holding’s 58th </h3>
              <h3>ordinary general assembly </h3>
              <h3>convened</h3>
            </div>
            <div className="type6">
              <span>Toffee sweet roll caramels oat cake </span>
              <span>lemon drops cupcake sweet roll </span>
              <span>halvah ice cream.</span>
            </div>
            <Button className="contain-btn">
              Read More <AiOutlineRight />
            </Button>
          </div>
        </div>
        </div>
        </div>
      </div>
    
  );
}

export default News2;