import "./single.css"
import Sidebar from "../../components/sidebar/Sidebar.jsx"
import SinglePost from "../../components/singlepost/SinglePost.jsx"

export default function Single() {
  return (
    <div className="single">
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}
