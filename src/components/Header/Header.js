import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import userImg from "../../assets/images/mark.jpg"

const Header = () => {
  return (
    <div className="main-container">
      <Link className="dashboard__link" to="/"><h3>My Dashboard</h3></Link>
      <div className="user">
        <img src={userImg} alt="user__img"></img>
        <h4 className="user__name">Mark</h4>
      </div>
    </div>
  );
};

export default Header;
