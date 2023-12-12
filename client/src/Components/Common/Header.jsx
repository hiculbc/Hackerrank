import React from "react";
import "./Common.scss";
import { NavLink } from "react-router-dom";
import { cookies } from "../../Cookies/cookies";

export const Header = () => {
    const userId = cookies.get("userId");

    return (
        <div className="header">
            <div className="nav-left">
            <h3>Hackerrank</h3>
            <NavLink to="/topics">Topics</NavLink>
            </div>
            <div className="nav-right">
             <NavLink to="/">Home</NavLink>
             <NavLink to="/profile">Profile</NavLink>
             <NavLink to="/login">Login</NavLink>
            </div>
        </div>
    )
}