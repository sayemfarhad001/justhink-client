import "./App.scss";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Announcements from "./components/Announcements/Announcements";
import axios from "axios";

import User from "./components/User/User";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import SideBar from "./components/SideBar/SideBar";

class App extends Component {
  state = {
    users: [],
    selectedUser: [],
    islogged: false,
    loggedinUserId: ""
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/employees`).then((response) => {
      this.setState({ users: response.data });
    });
  }

  getName() {
    // let person = prompt("Please enter your username");
    let person = "mark-devon"
    if ( !this.state.islogged && person != null ) {
      let user = this.state.users.filter((elem) => elem.username === person )[0];
      this.setState({islogged: true, selectedUser: [ user, ...this.state.selectedUser], loggedinUserId: user.id});     
    } else if (person == null){
      this.getName();
    }
  }

  componentDidUpdate() {
    this.getName();
    console.log(this.state.loggedinUserId)
    console.log(this.state.islogged)  
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/announcements" component={Announcements} />
            <Route
              exact
              path="/employees"
              render={(props) => (
                <EmployeeList users={this.state.users} loggedinUserId={this.state.loggedinUserId} {...props} />
              )}
            />
            <Route
              exact
              path="/employees/:id"
              render={(props) => <User users={this.state.users} {...props} />}
            />
          </Switch>
          <SideBar />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
