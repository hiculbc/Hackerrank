import React from "react";
import "./Common.scss";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <div className="header">
            <div className="nav-left">
            <h3>Hackerrank</h3>
            <NavLink>Topics</NavLink>
            </div>
            <div className="nav-right">
             <NavLink to="/">Home</NavLink>
             <NavLink to="/profile">Profile</NavLink>
             <NavLink to="/profile">Login</NavLink>
            </div>
        </div>
    )
}