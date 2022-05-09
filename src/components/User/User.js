import React from "react";
import "./User.scss";
// import { Link } from "react-router-dom";

import Calendar from "../Calendar/Calendar"

const User = (props) => {
    // let newId = this.props
	let {users, match} = props
	let user = users.filter((elem)=>elem.id===match.params.id)

	const {key, id, name, username, comfort, role, skills, office, calendar, status, workfrom} = user[0]
	
	console.log( key, id, name, username, comfort, role, skills, office)
	return (
		<div key={key} className="user__container">
				<div className="user__main" id={id}>
					
					<div className="user__name">
						{/* <h4 className="user__subtitle">NAME</h4> */}
						<div className="user__text">
							<p>{name}</p>
							{/* <img alt="chevron" src={chevron} /> */}
						</div>
						<div className="user__status" style={{ backgroundImage: `url(${require(`../../assets/icons/${workfrom}.png`)})` }}></div>
					</div>
					
					<div className="user__picture-container">
						{/* <h4 className="user__subtitle">NAME</h4> */}
						<div className="user__picture" 
							
							style={{ backgroundImage: `url(${require(`../../assets/images/${username}.jpg`)})` }}
							>
							{/* <img src={require(`../../assets/images/${username}.jpg`)} alt="" className="user__image">
							</img> */}

							<div className="user__text employee__picture--text-container">
									<p className="user__picture--text">{status}</p>
							</div>
						</div>
					</div>
					
					<div className="user__comfort-level">
						{/* <h4 className="user__subtitle">ADDRESS</h4> */}
						<p className="user__text employee__comfort-level-text" style={{ backgroundColor: `${comfort}` }}>
							COVID 19 Comfort Level
						</p>
					</div>
					
					<div className="user__role">
						{/* <h4 className="user__subtitle">ROLE</h4> */}
						<p className="user__text">{role}
						</p>
					</div>

					<div className="user__skills">
						{/* <h4 className="user__subtitle">CITY</h4> */}
						<p className="user__text">Can help with: {skills}</p>
					</div>


					<div className="user__office">
						{/* <h4 className="user__subtitle">COUNTRY</h4> */}
						<p className="user__text employee__schedule-title-text">
							In Office
						</p>
						<div className="user__schedule">
										{/* <h4 className="user__subtitle">In Office</h4> */}
										{/* <p className="user__text"></p> */}
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
						{/* <p>{office.map((elem)=>{
							    return ( 
									
								 );
						})}</p> */}
					</div>

					<div className="user__card-button-container">
						<button className="user__card-button"> See Full Calendar</button>
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
					<Calendar calendar={calendar}/>
				</div>
			</div>

    );

};
export default User;