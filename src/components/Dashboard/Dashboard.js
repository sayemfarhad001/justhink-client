import React from "react";
import axios from "axios";
import "./Dashboard.scss";
import User from "../User/User";
import Header from "../Header/Header";
import EmployeeList from "../EmployeeList/EmployeeList";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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



        <Header />
        <EmployeeList users={this.state.users}/>




        {/* <User user={this.state.selectedUser[0]} setId={this.setState} /> */}



        {/* <BrowserRouter>
          <Switch>
            <Route path="/employees" render={(props)=>{<EmployeeList users={this.state.users} match={props.match}/>}}/>
            <Route path="/employees/:id" render={(props)=>{<User users={this.state.users} match={props.match}/>}}/>
          </Switch>
        </BrowserRouter>
                 */}
      </main>
    );
  }
}
