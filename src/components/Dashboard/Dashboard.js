import React from "react";
import axios from "axios";
import "./Dashboard.scss";
import User from "../User/User";
import EmployeeList from "../EmployeeList/EmployeeList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import task from "../../assets/images/13929.png"

export default class Dashboard extends React.Component {
  state = {
    users: [],
    selectedUser: []
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/dashboard`).then((response) => {
      this.setState({ users: response.data });
    });
  }
  // getName() {
  //   let person = prompt("Please enter your name");
  //   if (person != null) {
  //     document.getElementById("demo").innerHTML =
  //     "Hello " + person + "! How are you today?";
  //     let user = this.state.users.filter((employee)=> employee.name.toLowerCase() === person.toLowerCase())    
  //     this.setState({selectedUser: [user, ...this.state.selectedUser]})
  //   }
  // }
  render() {

    // let user = this.state.users.filter((employee)=> employee.id === this.state.selectedId) 
    return (
      <main>
        {/* <p id="demo"></p> */}
               {/* <EmployeeList users={this.state.users}/> */}
        {/* <User user={this.state.selectedUser[0]} setId={this.setState} /> */}
        {/* <BrowserRouter>
          <Switch>
            <Route path="/employees" render={(props)=>{<EmployeeList users={this.state.users} match={props.match}/>}}/>
            <Route path="/employees/:id" render={(props)=>{<User users={this.state.users} match={props.match}/>}}/>
          </Switch>
        </BrowserRouter>
                 */}
<div className="dashboard-main-wrapper">
  <div className="dashboard-info-wrapper">
  <div className="dashboard-left">
  <div className="dashboard-wrapper">
                   <h3 className="dashboard-title">Announcements</h3>
                   <div className="dashboard-info">
                     <p>COVID-19 comfort level policy in place</p>
                     <p>Top Employer Achievement</p>
                     <p>Upcoming Events</p>
                   </div>
                 </div>
                 <div className="task-wrapper">
                   <h3 className="task-title">My Tasks</h3>
                   <img src={task}></img>
                 </div>
  </div>



<div className="dashboard-right">
<div className="task-progression-wrapper">
                   <div className="task-progression">
                     <div className="task-finished">
                       <p>4</p>
                       <p>Tasks finished</p>
                       </div>
                     <div className="task-remaining">
                     <p>3</p>
                       <p>Tasks remaining</p>
                     </div>
                   </div>
                 </div>
                 <div className="my-skills-wrapper">
  <h3>My Skills</h3>
  <div className="skills">
    <p>Interface</p>
    <p>CSS</p>
    <p>HTML</p>
    <p>JavaScript</p>
    <p>jQuery</p>
    <p>Figma</p>
    <p>Sketch</p>
  </div>
  <div className="booking-wrapper">
    <h3 className="booking-wrapper__title">Next Booked On-site Date:</h3>
    <h3 className="booking-wrapper__title">MAY 10, 2022</h3>
    <div className="booking-info-wrapper">
      <div className="info-left">
        <p>Building Name:</p>
        <p>Address:</p>
        <p>Floor:</p>
        <p>Section:</p>
        <p>Seat: </p>
        <p>Building Status:</p>
              </div>
      <div className="info-right">
      <p>BrainStation</p>
        <p>460 King St. W</p>
        <p>10</p>
        <p>51</p>
        <p>27</p>
        <p>Fully Open</p>
      </div>
    </div>
  </div>
</div>
</div>
  </div>
  

                
</div>
                 
      </main>
    );
  }
}
