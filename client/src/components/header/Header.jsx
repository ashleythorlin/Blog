import "./header.css"

export default function Header() {
  return (
    <div className="Header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img 
            className="headerImg"
            src="https://wallpaper.dog/large/5486695.png" 
            alt="" 
        />
    </div>
  )
}
