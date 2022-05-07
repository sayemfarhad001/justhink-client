import React from "react";
import "./Calendar.scss"

const Calendar = ({ calendar }) => {
    return ( 
        <div className="user__calendar">
            <h4 className="user__subtitle">CALENDAR</h4>
            <p className="user__text"></p>
            <p>09:00-10:00 :{calendar[0]}</p>
            <p>10:00-11:00 :{calendar[1]}</p>
            <p>11:00-12:00 :{calendar[2]}</p>
            <p>12:00-13:00 :{calendar[3]}</p>
            <p>13:00-14:00 :{calendar[4]}</p>
            <p>14:00-15:00 :{calendar[5]}</p>
            <p>15:00-16:00 :{calendar[6]}</p>
            <p>16:00-17:00 :{calendar[7]}</p>
        </div>
     );
}
 
export default Calendar;