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
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/employees`).then((response) => {
      this.setState({ users: response.data });
    });
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
                <EmployeeList users={this.state.users} {...props} />
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
