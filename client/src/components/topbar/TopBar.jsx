import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import "./topbar.css";
import {Context} from "../../context/Context";

export default function TopBar() {
    const {user, dispatch} = useContext(Context);
    const handleLogout = () => {
        dispatch({type: "LOGOUT"});
    }

  return (
    <div className="top">
        <div className="topLeft">
            <i className="topIcon fab fa-instagram-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-linkedin"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
                <li className="topListItem"><Link className="link" to="/about">ABOUT</Link></li>
                <li className="topListItem"><Link className="link" to="/contact">CONTACT</Link></li>
                <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
                <li className="topListItem" onClick={handleLogout}>{user && "LOG OUT"}</li>
            </ul>
        </div>
        <div className="topRight">
            {
                user ? (
                    <img 
                        className="topImg"
                        src={user.profilePic} 
                        alt="" 
                    />
                ) : (
                    <ul className="topList">
                        <li className="topListItem"><Link className="link" to="/login">LOG IN</Link></li>
                        <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li>
                    </ul>
                )
            }
            
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
