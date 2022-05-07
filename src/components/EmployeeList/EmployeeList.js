import User from "../User/User"
import "./EmployeeList.scss"
const EmployeeList = ({users}) => {
    return ( 
        <section className="dashboard__main">
           <div className="dashboard__navbar">
                <div className="dashboard__searchbar__container">
                    <label for="search"></label>
                    <input className="dashboard__searchbar" type="text" id="search" name="search" required
                        placeholder="Search By Name"
                        minlength="4" maxlength="8" size="10"></input>
                </div>
                <div className="dashboard__positionsort__container">
                    <label for="search"></label>
                    <input className="dashboard__positionsort" type="text" id="search" name="search" required
                        placeholder="Position"
                        minlength="4" maxlength="8" size="10"></input>
                </div>
                <div className="dashboard__skillsort__container">
                    <label for="search"></label>
                    <input className="dashboard__skillsort" type="text" id="search" name="search" required
                        placeholder="Skill"
                        minlength="4" maxlength="8" size="10"></input>
                </div>
            </div>
            <div className="dashboard__card-container">
                {   users.map(  (elem) => {
                        return (
                            <User
                                key={elem.id}
                                id={elem.id}
                                name={elem.name}
                                address={elem.address}
                                role={elem.role}
                                city={elem.city}
                                country={elem.country}
                                phone={elem.phone}
                                email={elem.email}
                                calendar={elem.calendar}
                            />
                        ); 
                }   )  }
            </div>
        </section>
     );
}
 
export default EmployeeList;
