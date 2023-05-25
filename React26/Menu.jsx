import React from "react";
/* import { Link } from "react-router-dom"; */
import { NavLink } from "react-router-dom";

const Menu=()=>{
    return(
        <>
            <NavLink exact activeClassName="active_class" to="/">About Us</NavLink> <br></br>
            <NavLink exact activeClassName="active_class" to="/contact">Contact Us</NavLink> <br></br>
            <NavLink exact activeClassName="active_class" to="/contact/name">Name </NavLink> <br></br>
            <NavLink exact activeClassName="active_class" to="/user/mayank/cri">User </NavLink> <br></br>
        </>
    )
}

export default Menu