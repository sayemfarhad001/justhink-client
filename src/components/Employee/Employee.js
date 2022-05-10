import React from "react";
import "./Employee.scss";
import { Link } from "react-router-dom";

const Employee = ({
  id,
  name,
  username,
  status,
  workfrom,
  comfort,
  role,
  skills,
  allskills,
  office,
}) => {
  return (
    <Link className="employee__link" to={`employees/${id}`}>
      <div key={id} className="employee__container">
        <div className="employee__card" id={id}>
          <div className="employee__name">
            <div className="employee__text">
              <p>{name}</p>
            </div>
            <div
              className="employee__status"
              style={{
                backgroundImage: `url(${require(`../../assets/icons/${workfrom}.png`)})`,
              }}
            ></div>
          </div>

          <div className="employee__picture-container">
            <div
              className="employee__picture"
              style={{
                backgroundImage: `url(${require(`../../assets/images/${username}.jpg`)})`,
              }}
            >
              <div className="employee__text employee__picture--text-container">
                <p className="employee__picture--text">{status}</p>
              </div>
            </div>
          </div>

          <div className="employee__comfort-level">
            <p
              className="employee__text employee__comfort-level-text"
              style={{ backgroundColor: `${comfort}` }}
            >
              COVID 19 Comfort Level
            </p>
          </div>

          <div className="employee__role">
            <p className="employee__text">{role}</p>
          </div>

          <div className="employee__skills">
            <p className="employee__text">Can help with: {skills}</p>
          </div>

          <div className="employee__office">
            <p className="employee__text employee__schedule-title-text">
              In Office
            </p>
            <div className="employee__schedule">
              <p
                className="employee__schedule-text"
                style={
                  office[0]
                    ? { color: "white", backgroundColor: "#183B54" }
                    : { color: "#183B54", backgroundColor: "white" }
                }
              >
                M
              </p>
              <p
                className="employee__schedule-text"
                style={
                  office[1]
                    ? { color: "white", backgroundColor: "#183B54" }
                    : { color: "#183B54", backgroundColor: "white" }
                }
              >
                T
              </p>
              <p
                className="employee__schedule-text"
                style={
                  office[2]
                    ? { color: "white", backgroundColor: "#183B54" }
                    : { color: "#183B54", backgroundColor: "white" }
                }
              >
                W
              </p>
              <p
                className="employee__schedule-text"
                style={
                  office[3]
                    ? { color: "white", backgroundColor: "#183B54" }
                    : { color: "#183B54", backgroundColor: "white" }
                }
              >
                TH
              </p>
              <p
                className="employee__schedule-text"
                style={
                  office[4]
                    ? { color: "white", backgroundColor: "#183B54" }
                    : { color: "#183B54", backgroundColor: "white" }
                }
              >
                F
              </p>
              <p
                className="employee__schedule-text"
                style={
                  office[5]
                    ? { color: "white", backgroundColor: "#183B54" }
                    : { color: "#183B54", backgroundColor: "white" }
                }
              >
                SA
              </p>
              <p
                className="employee__schedule-text"
                style={
                  office[6]
                    ? { color: "white", backgroundColor: "#183B54" }
                    : { color: "#183B54", backgroundColor: "white" }
                }
              >
                SU
              </p>
            </div>
          </div>

          <div className="employee__card-button-container">
            <button className="employee__card-button">
              {" "}
              See Full Calendar
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Employee;
