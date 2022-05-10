import React from "react";
import "./Announcements.scss";
import { Link } from "react-router-dom";

const Announcements = () => {
  return (
    <div className="announcements-main">
      <h3 className="announcements-main__title">New Announcements</h3>
      <div className="announcements-main__wrapper">
        <div className="announcements-main__comfort">
          <h2 className="announcements-main__comfort__title">
            COVID-19 comfort level policy in place
          </h2>
          <div className="announcements-main__comfort__levels">
            <span></span>
            <p>Feels comfortable - No mask or social distance requirement.</p>
            <span></span>
            <p>Slightly uneasy - Would like to maintain 6 feet distance.</p>
            <span></span>
            <p>
              Very uneasy - Would like to maintain 6 feet of distance and wear a
              mask.
            </p>
            <p>Click below to read full policy. </p>
          </div>
        </div>
        <div className="feedback-wrapper">
          <p>
            We’re here to help. Please let us know if you have any health and
            safety concerns.
          </p>
          <button type="button">Share Feedback</button>
        </div>
      </div>
      <div className="monthly-data">
        <h3 className="monthly-data__title">COVID-19 Data For This Month:</h3>
        <div className="monthly-data__numbers">
          <div className="monthly-data__numbers__wrapper">
            <p>Number of people in New York campus </p>
            <p>50</p>
          </div>
          <div className="monthly-data__numbers__wrapper">
            <p>Number of people in Toronto campus</p>
            <p>45</p>
          </div>
          <div className="monthly-data__numbers__wrapper">
            <p>Number of Facilities Open</p>
            <p>2/5</p>
          </div>
        </div>
      </div>
      <div className="latest-announcements">
        <h3 className="latest-announcements__title">
          Latest Company News & Announcements:
        </h3>
        <div className="latest-announcements__wrapper">
          <p>MAY 5, 2022</p>
          <p>
            Company enhances health and wellbeing benefits for employees.
            <Link to="">Read more.</Link>
          </p>
        </div>
        <div className="latest-announcements__wrapper">
          <p>MAY 2, 2022</p>
          <p>
            Company named one of Canada’s Top Employer that cares for Employees’
            health and safety.
            <Link to="">Read more.</Link>
          </p>
        </div>
        <div className="latest-announcements__wrapper">
          <p>APRIL 20, 2022</p>
          <p>
            UPCOMING EVENT: On May 15, 2022 is going to be Company’s Employee
            Appreciation Day.
            <Link to="">Read more.</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
