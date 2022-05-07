import React from "react";
import axios from "axios";
import "./Dashboard.scss";
// import User from "../User/User";
import Header from "../Header/Header";
import EmployeeList from "../EmployeeList/EmployeeList";

export default class Dashboard extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/dashboard`).then((response) => {
      this.setState({ users: response.data });
    });
  }

  render() {
    return (
      <main>
        <Header />
        <EmployeeList users={this.state.users}/>
      </main>
    );
  }
}
