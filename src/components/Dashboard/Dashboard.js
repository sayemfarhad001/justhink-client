import React from "react";
import axios from "axios";
import "./Dashboard.scss";
import User from "../User/User";
import Header from "../Header/Header";

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
        <section className="dashboard__main">
          {/* <div className="dashboard__container">
            {this.state.users.map((elem) => {
              return (
                <User
                  key={elem.id}
                  id={elem.id}
                  name={elem.name}
                  address={elem.address}
                  role={elem.role}
                  city={elem.city}
                  country={elem.country}
                  phone={elem.phone}
                  email={elem.email}
                  calendar={elem.calendar}
                />
              );
            })}
          </div> */}
        </section>
      </main>
    );
  }
}
