import React from "react";
/* import { Link } from "react-router-dom"; */
import { NavLink } from "react-router-dom";

const Menu=()=>{
    return(
        <>
            {/* without refreshing page */}
            {/* old method */}
            {/* <Link to="/">About Us</Link> <br></br>
            <Link to="/contact">Contact Us</Link> <br></br>
            <Link to="/contact/name">Name </Link> */}

            <NavLink exact activeClassName="active_class" to="/">About Us</NavLink> <br></br>
            <NavLink exact activeClassName="active_class" to="/contact">Contact Us</NavLink> <br></br>
            <NavLink exact activeClassName="active_class" to="/contact/name">Name </NavLink>

            {/* need to refresh the page */}
            {/* <a href="/">About</a> <br></br>
            <a href="/contact">Contact</a> */}
        </>
    )
}

export default Menu