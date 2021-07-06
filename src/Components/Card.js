import React from "react";
import "./Card.css";
const Card = ({ image, name, views, time, caption, cimg }) => {
  return (
    <div className="card">
      <img alt="sommthing" src={image} className="imgg" />
      <div className="show">
        <div className="iii">
          <img src={cimg} alt="small icon" className="im" />
          <span className="a">{time}:20</span>
        </div>
        <div className="other">
          <p className="nn">{caption}.</p>
          <p className="ligth">{name}</p>
          <div className="mm">
            <p className="ligth">{views} views</p> &nbsp;
            {"."}&nbsp;
            <p className="ligth">{time} hour ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
