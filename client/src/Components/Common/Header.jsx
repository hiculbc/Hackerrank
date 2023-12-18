import React, { useEffect } from "react";
import "./Common.scss";
import { NavLink, useNavigate } from "react-router-dom";
import {  removeUserId } from "../../CommonFunctionalities/cookies";
import { getUserId } from "../../CommonFunctionalities/cookies";

export const Header = () => {

    const navigate = useNavigate();
    
    const Logout = () => {
        removeUserId();
        navigate('/');
    }

    return (
        <div className="header">
            <div className="nav-left">
            <h3>Hackerrank</h3>
            <NavLink to="/topics">Topics</NavLink>
            </div>
            <div className="nav-right">
             <NavLink to="/">Home</NavLink>
             <NavLink to="/profile">Profile</NavLink>
            { getUserId() ? <div onClick={Logout} className="logout">Logout</div> : <NavLink to="/login">Login</NavLink> }
            </div>
        </div>
    )
}