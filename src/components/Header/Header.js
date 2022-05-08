import React from "react";
import "./Header.scss";
import userImg from "../../assets/images/mark.jpg"

const Header = () => {
  return (
    <div className="main-container">
      <h3>My Dashboard</h3>
      <div className="user">
        <img src={userImg} alt="user__img"></img>
        <h4 className="user__name">Mark</h4>
      </div>
    </div>
  );
};

export default Header;
