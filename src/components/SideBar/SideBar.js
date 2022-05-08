import React from 'react'
import "./SideBar.scss"
import dashboard from "../../assets/icons/dash.svg"
import announcement from "../../assets/icons/announcement.svg"
import employees from "../../assets/icons/employees.svg"
import calendar from "../../assets/icons/calendar.svg"

const SideBar = () => {
  return (
    <div>


<div class="sidenav">
  <img src={dashboard}></img>
  <img src={announcement}></img>
  <img src={employees}></img>
  <img src={calendar}></img>

</div>
    </div>
  )
}

export default SideBar







   
