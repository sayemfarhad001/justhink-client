import React from "react";
import "./Employee.scss";
import { Link } from "react-router-dom";

const Employee = ({key, id, name, comfort, role, skills, office}) => {
    return (
		<Link className="employee__link" to={`employees/${id}`}>
			<div key={key} className="employee__container">
				<div className="employee__row" id={id}>
					<div className="employee__name">
						{/* <h4 className="employee__subtitle">NAME</h4> */}
						<div className="employee__text">
							<p>{name}</p>
							{/* <img alt="chevron" src={chevron} /> */}
						</div>
					</div>
					<div className="employee__picture-container">
						{/* <h4 className="employee__subtitle">NAME</h4> */}
						<div className="employee__picture">
							<div className="employee__text employee__picture--text-container">
								<p className="employee__picture--text">Online</p>
							</div>
						</div>

					</div>
					<div className="employee__comfort-level">
						{/* <h4 className="employee__subtitle">ADDRESS</h4> */}
						<p className="employee__text" style={{ backgroundColor: `${comfort}` }}>
							COVID 19 Comfort Level
						</p>
					</div>
					
					
					<div className="employee__role">
						{/* <h4 className="employee__subtitle">ROLE</h4> */}
						<p className="employee__text">{role}
						</p>
					</div>

					<div className="employee__skills">
						{/* <h4 className="employee__subtitle">CITY</h4> */}
						<p className="employee__text">Can help with: {skills}</p>
					</div>


					<div className="employee__office">
						{/* <h4 className="employee__subtitle">COUNTRY</h4> */}
						<p className="employee__text">
							In Office
						</p>
						<div className="employee__schedule">
										{/* <h4 className="user__subtitle">In Office</h4> */}
										{/* <p className="employee__text"></p> */}
										<p className="employee__text employee__schedule-text" style={{ color:`${office[0]}`, backgroundColor: `${office[0]}` }} >M</p>
										<p className="employee__text employee__schedule-text" style={{ backgroundColor: `${office[1]}` }} >T</p>
										<p className="employee__text employee__schedule-text" style={{ backgroundColor: `${office[2]}` }} >W</p>
										<p className="employee__text employee__schedule-text" style={{ backgroundColor: `${office[3]}` }} >TH</p>
										<p className="employee__text employee__schedule-text" style={{ backgroundColor: `${office[4]}` }} >F</p>
										<p className="employee__text employee__schedule-text" style={{ backgroundColor: `${office[5]}` }} >SA</p>
										<p className="employee__text employee__schedule-text" style={{ backgroundColor: `${office[6]}` }} >SU</p>
									</div>
						{/* <p>{office.map((elem)=>{
							    return ( 
									
								 );
						})}</p> */}
					</div>

					<div className="employee__icons">
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