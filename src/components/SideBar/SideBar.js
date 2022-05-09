import React from 'react'
import "./SideBar.scss"
import dashboard from "../../assets/icons/dash.svg"
import announcement from "../../assets/icons/announcement.svg"
import employees from "../../assets/icons/employees.svg"
import calendar from "../../assets/icons/calendar.svg"
import { Link } from 'react-router-dom'
const SideBar = () => {
  return (
    <div>


<div class="sidenav">
  <img src={dashboard}></img>
  <img src={announcement}></img>
  <Link to="/employees">
    <img src={employees}></img>
  </Link>
  <img src={calendar}></img>

</div>
    </div>
  )
}

export default SideBar







   
