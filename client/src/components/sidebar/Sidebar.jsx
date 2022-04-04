import "./sidebar.css"

export default function Sidebar() {
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
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Games</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW ME</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-instagram-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-linkedin"></i>
            </div>
        </div>
    </div>
  )
}
