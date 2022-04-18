import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import "./sidebar.css"

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(()=>{
        const getCats = async ()=>{
            const res = await axios.get("/api/categories");
            setCats(res.data)
        }
        getCats();
    })
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img 
                src="https://cdn.oneesports.gg/cdn-data/2022/01/GenshinImpact_KeqingSkinLanternRite.jpg" 
                alt="" 
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam 
                debitis autem accusantium voluptas! Dolores, necessitatibus. 
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                {cats.map((c)=> (
                    <Link to={`/?cat=${c.name}`} className="link">
                    <li className="sidebarListItem">{c.name}</li>
                    </Link>
                ))}
                
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW ME</span>
            <div className="sidebarSocial">
                <a href="https://www.instagram.com/ashley_thorlin/"><i className="sidebarIcon fab fa-instagram-square"></i></a>
                <a href="https://www.github.com/ashleythorlin"><i className="sidebarIcon fab fa-github-square"></i></a>
                <a href="https://www.linkedin.com/in/ashley-thorlin"><i className="sidebarIcon fab fa-linkedin"></i></a>
            </div>
        </div>
    </div>
  )
}
