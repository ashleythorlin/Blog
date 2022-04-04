import { Link } from "react-router-dom"
import "./topbar.css"

export default function TopBar() {
    const user = false;
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
                <li className="topListItem">{user && "LOG OUT"}</li>
            </ul>
        </div>
        <div className="topRight">
            {
                user ? (
                    <img 
                        className="topImg"
                        src="https://cdn.donmai.us/original/8d/b9/__keqing_genshin_impact_drawn_by_satomi_745684552__8db98aed248777b5c559c8aed5acce28.png" 
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
