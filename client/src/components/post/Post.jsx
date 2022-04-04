import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img 
        className="postImg"
          src="https://www.kindpng.com/picc/m/707-7071194_meme-memexd-memes-shrek-shrekmeme-mikewazowski-shrek-mike.png" 
          alt="" 
        />

        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
          <span className="postTitle">
            Lorem ipsum dolor sit amet
          </span>
          <hr />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi facilis qui incidunt illo. 
          Repellendus ipsam suscipit, culpa totam eum sed.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi facilis qui incidunt illo. 
          Repellendus ipsam suscipit, culpa totam eum sed.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi facilis qui incidunt illo. 
          Repellendus ipsam suscipit, culpa totam eum sed.
        </p>
    </div>
  )
}
