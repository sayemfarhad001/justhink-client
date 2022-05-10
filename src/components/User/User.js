import React from "react";
import "./User.scss";
// import { Link } from "react-router-dom";

import Calendar from "../Calendar/Calendar"

	const User = (props) => {

	let {users, match} = props
	let user = users.filter((elem)=>elem.id===match.params.id)
	const {id, name, username, comfort, role, skills, allskills, office, city, country, phone, email, calendar, status, workfrom, tasks} = user[0]
	
	return (
		<div key={id} className="user__container">
				
			{/* PROFILE LEFT */}
			<div className="user__profile--left" id={id}>
				
				<div className="user__picture-container">
					<div className="user__picture" style={{ backgroundImage: `url(${require(`../../assets/images/${username}.jpg`)})` }} >
						<div className="user__text employee__picture--text-container">
							<p className="user__picture--text">{status}</p>
						</div>
					</div>
				</div>

				<div className="user__name">
					<div className="user__text user__name__text">
						<p>{name}</p>
					</div>
					<div className="user__status" style={{ backgroundImage: `url(${require(`../../assets/icons/${workfrom}.png`)})` }}></div>
				</div>
				
				<div className="user__comfort-level">
					<p className="user__text employee__comfort-level-text" style={{ backgroundColor: `${comfort}` }}>
						COVID 19 Comfort Level
					</p>
				</div>
				
				<div className="user__role">
					<p className="user__text">{role}</p>
				</div>

				<div className="user__skills">
					<p className="user__text">Can help with: {skills}</p>
				</div>

				<div className="user__office">
					<p className="user__text employee__schedule-title-text">In Office</p>
					<div className="user__schedule">
						{/* {id={condition ? 'msg' : null}} */}
						<p className="user__schedule-text" 
							style={ office[0] 
								? { color:"white", backgroundColor: "#183B54" }
								: { color:"#183B54", backgroundColor: "white" }
							} 
						>M</p>
						<p className="user__schedule-text" 
							style={ office[1] 
								? { color:"white", backgroundColor: "#183B54" }
								: { color:"#183B54", backgroundColor: "white" }
							} 
						>T</p>
						<p className="user__schedule-text" 
							style={ office[2] 
								? { color:"white", backgroundColor: "#183B54" }
								: { color:"#183B54", backgroundColor: "white" }
							} 
						>W</p>
						<p className="user__schedule-text" 
							style={ office[3] 
								? { color:"white", backgroundColor: "#183B54" }
								: { color:"#183B54", backgroundColor: "white" }
							} 
						>TH</p>
						<p className="user__schedule-text" 
							style={ office[4] 
								? { color:"white", backgroundColor: "#183B54" }
								: { color:"#183B54", backgroundColor: "white" }
							} 
						>F</p>
						<p className="user__schedule-text" 
							style={ office[5] 
								? { color:"white", backgroundColor: "#183B54" }
								: { color:"#183B54", backgroundColor: "white" }
							} 
						>SA</p>
						<p className="user__schedule-text" 
							style={ office[6] 
								? { color:"white", backgroundColor: "#183B54" }
								: { color:"#183B54", backgroundColor: "white" }
							} 
						>SU</p>				
					</div>
				</div>
				<div className="user__city">
					<p className="user__text">{city}, {country}</p>
				</div>
				<div className="user__timezone">
					<p className="user__text">Eastern Time Zone:</p>
					<p className="user__text">8:40</p>
				</div>
				<div className="user__phone">
					<p className="user__text">Cell</p>
					<p className="user__text">{phone}</p>
				</div>
				<div className="user__email">
					<p className="user__text">Email</p>
					<p className="user__text"><a href={`mailto:${email}`}>{email}</a></p>
				</div>
				<div className="user__profile__icon-container">
					<img src={require(`../../assets/icons/call.png`)} alt="" className="user__profile__icon"></img>
					<img src={require(`../../assets/icons/message.png`)} alt="" className="user__profile__icon"></img>
				</div>
				{/* <div className="user__card-button-container">
					<button className="user__card-button"> See Full Calendar</button>
					<img
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
					</Link>
				</div> */}
			</div>


			{/* PROFILE RIGHT */}
			<div className="user__profile--right">
				<div className="user__profile--right-top">
					<div className="user__profile--right-top-tasks-container">
						<p className="user__text--title user__text">{name.split(" ")[0]}'s Tasks</p>
						<div className="user__tasks-container">
							{ tasks.map ((elem)=>
								<div key={elem.type} className="user__task">
									{/* <div className="user__task-icon user__profile__icon" style={{ backgroundImage: `url(${require(`../../assets/icons/${elem.type}.png`)})` }}></div> */}
									<img src={require(`../../assets/icons/${elem.type}.png`)} alt="" className="user__profile__icon"></img>
									<div className="user__task__subdiv">
										<h3 className="user__text user__task__subdiv__text">{elem.header}</h3>
										<p className="user__text">Deadline: {elem.deadline}</p>
									</div>
								</div>
							)}
						</div>
					</div>
					<div className="user__profile--right-allskills-container">
						<p className="user__text--title user__text">Skills</p>
						<div className="user__allskills user__text">
							<ul>{allskills.split(",").map((elem)=><li className="user__allskills__list-item">{elem}</li>)}</ul>
						</div>
					</div>
				</div>
				<div className="user__profile--right-bottom-container">
					<p className="user__text--title user__text">Schedule</p>
					<div className="user__profile--right-bottom">
						<Calendar calendar={calendar}/>
					</div>
				</div>
			</div>
		</div>

    );

};
export default User;