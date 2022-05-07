import React from "react";
import "./User.scss";
import { Link } from "react-router-dom";

const User = ({key, id, name, address, role, city, country, phone, email, calendar}) => {
    return (
      <div key={key} className="user__container">
        {/* {key}
        {name}
        {address}
        {role}
        {city}
        {coundivy}
        {phone}
        {email} */}

        <div className="user__row" id={id}>
        <div className="user__name">
          <h4 className="user__subtitle">NAME</h4>
          <div className="user__item">
            <Link
              className="user__link"
              to={`dashboard/${id}`}
            >
              <p>{name}</p>
              {/* <img alt="chevron" src={chevron} /> */}
            </Link>
          </div>
        </div>
        <div className="user__category">
          <h4 className="user__subtitle">ADDRESS</h4>
          <p className="user__text">
            {address}
          </p>
        </div>
        <div className="user__status">
          <h4 className="user__subtitle">ROLE</h4>
          <p className="user__status--text">{role}
          </p>
        </div>

        <div className="user__quantity">
          <h4 className="user__subtitle">CITY</h4>
          <p className="user__text">{city}</p>
        </div>


        <div className="user__warehouse--name">
          <h4 className="user__subtitle">COUNTRY</h4>
          <p className="user__text">{country}</p>
        </div>
        <div className="user__warehouse--name">
          <h4 className="user__subtitle">Phone</h4>
          <p className="user__text">{phone}</p>
        </div>
        <div className="user__warehouse--name">
          <h4 className="user__subtitle">EMAIL</h4>
          <p className="user__text">{email}</p>
        </div>

        <div className="user__icons">
          {/* <img
            className="user__icon--left"
            src={deleteIcon}
            onClick={toggleModal}
            alt="garbage can"
          />
          <Link to={`/inventories/${this.props.id}/edit`}>
            <img
              className="user__icon--right"
              src={editIcon}
              alt="pencil"
            />
          </Link> */}
        </div>
        </div>
        <div className="user__warehouse--name">
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

      </div>
    );

};
export default User;