import React from "react";
import "./User.scss";
// import { Link } from "react-router-dom";

import Calendar from "../Calendar/Calendar"

const User = (
	{user, setId}
	) => {
    // let newId = this.props

	console.log(user)
	return (
		<></>
		// <div key={key} className="user__container">
		// 	<div className="user__main" id={id}>
		// 		<div className="user__name">
		// 			<h4 className="user__subtitle">NAME</h4>
		// 			<div className="user__text">
						
		// 				<p>{name}</p>
		// 				{/* <img alt="chevron" src={chevron} /> */}

		// 			</div>
		// 		</div>
		// 		<div className="user__address">
		// 			<h4 className="user__subtitle">ADDRESS</h4>
		// 			<p className="user__text">
		// 				{address}
		// 			</p>
		// 		</div>
		// 		<div className="user__role">
		// 			<h4 className="user__subtitle">ROLE</h4>
		// 			<p className="user__role--text">{role}
		// 			</p>
		// 		</div>

		// 		<div className="user__city">
		// 			<h4 className="user__subtitle">CITY</h4>
		// 			<p className="user__text">{city}</p>
		// 		</div>


		// 		<div className="user__country--name">
		// 			<h4 className="user__subtitle">COUNTRY</h4>
		// 			<p className="user__text">{country}</p>
		// 		</div>
		// 		<div className="user__phone">
		// 			<h4 className="user__subtitle">Phone</h4>
		// 			<p className="user__text">{phone}</p>
		// 		</div>
		// 		<div className="user__email">
		// 			<h4 className="user__subtitle">EMAIL</h4>
		// 			<p className="user__text">{email}</p>
		// 		</div>


		// 		<div className="user__icons">
		// 			{/* <img
		// 				className="user__icon--left"
		// 				src={deleteIcon}
		// 				onClick={toggleModal}
		// 				alt="garbage can"
		// 			/>
		// 			<Link to={`/inventories/${this.props.id}/edit`}>
		// 				<img
		// 				className="user__icon--right"
		// 				src={editIcon}
		// 				alt="pencil"
		// 				/>
		// 			</Link> */}
		// 		</div>
		// 		<Calendar calendar={calendar}/>
		// 	</div>
		// </div>
    );

};
export default User;