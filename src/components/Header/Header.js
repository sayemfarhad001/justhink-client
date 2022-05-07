import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="main-container">
      <h3>My Dashboard</h3>
      <div className="user">
        <img src="" alt="user__img"></img>
        <h4 className="user__name">Mark</h4>
      </div>
    </div>
  );
};

export default Header;
