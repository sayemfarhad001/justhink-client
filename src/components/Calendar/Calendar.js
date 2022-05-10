import React from "react";
import "./Calendar.scss"

const Calendar = ({ calendar }) => {
    return ( 
        <div className="user__calendar-container">
            <div className="user__calendar__top">
                <div className="user__calendar__top__left"></div>
                <button className="user__calendar-button">BOOK MEETING</button>
            </div>
            <div className="user__calendar">
                <p className="user__calendar__text user__text" 
                    style={ calendar[0] !== "" 
                        ? { color:"white", backgroundColor: "#183B54" }
                        : { color:"#183B54", backgroundColor: "white" }
					}><b>09:00-10:00</b> <p>{calendar[0]}</p></p>
                <p className="user__calendar__text user__text"
                    style={ calendar[1] !== "" 
                        ? { color:"white", backgroundColor: "#183B54" }
                        : { color:"#183B54", backgroundColor: "white" }
                    }><b>10:00-11:00</b> <p>{calendar[1]}</p></p>
                <p className="user__calendar__text user__text"
                    style={ calendar[2] !== "" 
                        ? { color:"white", backgroundColor: "#183B54" }
                        : { color:"#183B54", backgroundColor: "white" }
                    }><b>11:00-12:00</b> <p>{calendar[2]}</p></p>
                <p className="user__calendar__text user__text"
                    style={ calendar[3] !== "" 
                        ? { color:"white", backgroundColor: "#183B54" }
                        : { color:"#183B54", backgroundColor: "white" }
                    }><b>12:00-13:00</b> <p>{calendar[3]}</p></p>
                <p className="user__calendar__text user__text"
                    style={ calendar[4] !== "" 
                        ? { color:"white", backgroundColor: "#183B54" }
                        : { color:"#183B54", backgroundColor: "white" }
                    }><b>13:00-14:00</b> <p>{calendar[4]}</p></p>
                <p className="user__calendar__text user__text"
                    style={ calendar[5] !== "" 
                        ? { color:"white", backgroundColor: "#183B54" }
                        : { color:"#183B54", backgroundColor: "white" }
                    }><b>14:00-15:00</b> <p>{calendar[5]}</p></p>
                <p className="user__calendar__text user__text"
                    style={ calendar[6] !== "" 
                        ? { color:"white", backgroundColor: "#183B54" }
                        : { color:"#183B54", backgroundColor: "white" }
                    }><b>15:00-16:00</b> <p>{calendar[6]}</p></p>
                <p className="user__calendar__text user__text"
                    style={ calendar[7] !== "" 
                        ? { color:"white", backgroundColor: "#183B54" }
                        : { color:"#183B54", backgroundColor: "white" }
                    }><b>16:00-17:00</b> <p>{calendar[7]}</p></p>
            </div>
        </div>
     );
}
 
export default Calendar;