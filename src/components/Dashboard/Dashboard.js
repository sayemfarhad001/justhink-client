import React from "react";
import "./Dashboard.scss";
import task from "../../assets/images/13929.png";
import virusIcon from "../../assets/icons/virus.svg";
import badgeIcon from "../../assets/icons/badge.svg";
import calendarIcon from "../../assets/icons/calendar-announcements.svg";

export default class Dashboard extends React.Component {
  render() {
    return (
      <main className="dashboard-main">
        <div className="dashboard-info-wrapper">
          <div className="dashboard-left">
            <div className="dashboard-wrapper">
              <h3 className="dashboard-title">Announcements</h3>
              <div className="dashboard-info">
                <div className="dashboard-info__description-wrapper">
                  <img src={virusIcon} alt="virus-icon" />
                  <div className="description-container">
                    <p className="dashboard-info__description">
                      COVID-19 comfort level policy in place
                    </p>
                    <p className="dashboard-info__description">
                      Red is Feels comfortable - No mask or social distance
                      requirement. Yellow is slightly uneasy - Would like....
                    </p>
                  </div>
                </div>
                <span className="dashboard-info__description__divider"></span>
                <div className="dashboard-info__description-wrapper">
                  <img src={badgeIcon} alt="badge-icon" />
                  <p className="dashboard-info__description">
                    Top Employer Achievement
                  </p>
                  <p>
                    Company named one of Canada’s Top Employer that cares for
                    Employees’ health and safet
                  </p>
                </div>
                <span className="dashboard-info__description__divider"></span>
                <div className="dashboard-info__description-wrapper">
                  <img src={calendarIcon} alt="calendar-icon" />
                  <p className="dashboard-info__description">Upcoming Events</p>
                  <p>
                    May 15, 2022 is going to be Company’s Employee Appreciation
                    Day
                  </p>
                </div>
              </div>
            </div>
            <div className="task-wrapper">
              <h3 className="task-title">My Tasks</h3>
              <img alt="" src={task}></img>
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
                <h3 className="booking-wrapper__title">
                  Next Booked On-site Date:
                </h3>
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
      </main>
    );
  }
}
