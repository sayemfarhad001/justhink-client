import React from "react";
import "./Employee.scss";
import { Link } from "react-router-dom";

const Employee = ({
  key,
  id,
  name,
  username,
  status,
  workfrom,
  comfort,
  role,
  skills,
  office,
}) => {
  // let background = ;
  return (
    <Link className="employee__link" to={`employees/${id}`}>
      <div key={key} className="employee__container">
        <div className="employee__card" id={id}>
          <div className="employee__name">
            {/* <h4 className="employee__subtitle">NAME</h4> */}
            <div className="employee__text">
              <p>{name}</p>
              {/* <img alt="chevron" src={chevron} /> */}
            </div>
            <div
              className="employee__status"
              style={{
                backgroundImage: `url(${require(`../../assets/icons/${workfrom}.png`)})`,
              }}
            ></div>
          </div>

          <div className="employee__picture-container">
            {/* <h4 className="employee__subtitle">NAME</h4> */}
            <div
              className="employee__picture"
              style={{
                backgroundImage: `url(${require(`../../assets/images/${username}.jpg`)})`,
              }}
            >
              {/* <img src={require(`../../assets/images/${username}.jpg`)} alt="" className="employee__image">
							</img> */}

              <div className="employee__text employee__picture--text-container">
                <p className="employee__picture--text">{status}</p>
              </div>
            </div>
          </div>

          <div className="employee__comfort-level">
            {/* <h4 className="employee__subtitle">ADDRESS</h4> */}
            <p
              className="employee__text employee__comfort-level-text"
              style={{ backgroundColor: `${comfort}` }}
            >
              COVID 19 Comfort Level
            </p>
          </div>

          <div className="employee__role">
            {/* <h4 className="employee__subtitle">ROLE</h4> */}
            <p className="employee__text">{role}</p>
          </div>

          <div className="employee__skills">
            {/* <h4 className="employee__subtitle">CITY</h4> */}
            <p className="employee__text">Can help with: {skills}</p>
          </div>

          <div className="employee__office">
            {/* <h4 className="employee__subtitle">COUNTRY</h4> */}
            <p className="employee__text employee__schedule-title-text">
              In Office
            </p>
            <div className="employee__schedule">
              {/* <h4 className="user__subtitle">In Office</h4> */}
              {/* <p className="employee__text"></p> */}
              {/* {id={condition ? 'msg' : null}} */}

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
            {/* <p>{office.map((elem)=>{
							    return ( 
									
								 );
						})}</p> */}
          </div>

          <div className="employee__card-button-container">
            <button className="employee__card-button">
              {" "}
              See Full Calendar
            </button>
            {/* <img
							className="employee__icon--left"
							src={deleteIcon}
							onClick={toggleModal}
							alt="garbage can"
						/>
						<Link to={`/inventories/${this.props.id}/edit`}>
							<img
							className="employee__icon--right"
							src={editIcon}
							alt="pencil"
							/>
						</Link> */}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Employee;
