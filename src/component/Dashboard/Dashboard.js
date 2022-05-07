import React from "react";
import axios from "axios";
import "./Dashboard.scss";

import EmployeeList from "../EmployeeList/EmployeeList"

export default class Dashboard extends React.Component {
    state = {
        users: []
    };

    componentDidMount() {
        axios.get(`http://localhost:8080/dashboard`).then((response) => {
          this.setState({ users: response.data });
        });
    }

    render() {
        return (
            <main>
                <header>Header</header>
                <EmployeeList users={this.state.users}/>
                <footer>Footer</footer>
            </main>
        )
    }
}