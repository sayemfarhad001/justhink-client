// import User from "../User/User"
import Employee from "../Employee/Employee";
import "./EmployeeList.scss"

const EmployeeList = ({ users }) => {
    return ( 
        <section className="employee-list">
           <div className="employee-list__navbar">
                <div className="employee-list__searchbar__container">
                    <label htmlFor="search"></label>
                    <input className="employee-list__searchbar" type="text" id="search" name="search" required
                        placeholder="Search By Name"
                        minLength="4" maxLength="8" size="10"></input>
                </div>
                <div className="employee-list__positionsort__container">
                    <label htmlFor="positionsort"></label>
                    <input className="employee-list__positionsort" type="text" id="positionsort" name="positionsort" required
                        placeholder="Position"
                        minLength="4" maxLength="8" size="10"></input>
                </div>
                <div className="employee-list__skillsort__container">
                    <label htmlFor="skillsort"></label>
                    <input className="employee-list__skillsort" type="text" id="skillsort" name="skillsort" required
                        placeholder="Skill"
                        minLength="4" maxLength="8" size="10"></input>
                </div>
            </div>
            <div className="employee-list__card-container">
                {   users.map(  (elem) => {
                        return (
                            <Employee
                                key={elem.id}
                                id={elem.id}
                                name={elem.name}
                                username={elem.username}
                                status={elem.status}
                                workfrom={elem.workfrom}
                                // address={elem.address}
                                comfort={elem.comfort}
                                role={elem.role}
                                skills={elem.skills}
                                allskills={elem.skills}
                                office={elem.office}
                                // city={elem.city}
                                // country={elem.country}
                                // phone={elem.phone}
                                // email={elem.email}
                                // calendar={elem.calendar}
                            />
                        ); 
                }   )  }
            </div>
        </section>
     );
}
 
export default EmployeeList;
