import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import UserContext from "../utils/useContext";

class About extends React.Component {
    constructor(props) {
        super(props);        
    }
    componentDidMount() {
    }
    render() {
        return (
            
            <div className="main">
            <h2 className="heading" >About Class Component</h2>
            <UserContext.Consumer>
                {({user}) => (
                    <h4 className="font-bold text-xl p-10">
                        {user.name} - {user.email}
                    </h4>
                )}
            </UserContext.Consumer>
            <p className="sub-heading">Namaste React Course Live</p>
            <Profile name={"First Child"} xyz={"MERN"} />
            </div>
        )
    }
}
export default About;