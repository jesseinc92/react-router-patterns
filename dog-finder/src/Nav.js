import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css';


const Nav = () => {
    return (
        <nav className="Nav">
            <NavLink to='/dogs/duke'>Duke</NavLink>
            <NavLink to='/dogs/perry'>Perry</NavLink>
            <NavLink to='/dogs/tubby'>Tubby</NavLink>
            <NavLink to='/dogs/whiskey'>Whiskey</NavLink>
        </nav>
    )
}


export default Nav;