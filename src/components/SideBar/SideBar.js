import React from "react";
import "./SideBar.scss";
import dashboard from "../../assets/icons/dash.svg";
import announcement from "../../assets/icons/announcement.svg";
import employees from "../../assets/icons/employees.svg";
import calendar from "../../assets/icons/calendar.svg";
import settings from "../../assets/icons/settings.svg";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="sidenav-container">
      <div className="sidenav">
        <Link to="/">
          <img src={dashboard}></img>
        </Link>
        <Link to="/announcements">
          <img src={announcement}></img>
        </Link>
        <Link to="/employees">
          <img src={employees}></img>
        </Link>
        <Link to="/">
          <img src={calendar}></img>
        </Link>
        <Link to="/">
          <img src={settings}></img>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
