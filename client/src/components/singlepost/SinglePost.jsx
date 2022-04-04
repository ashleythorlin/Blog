import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img 
                className="singlePostImg"
                src="https://snworksceo.imgix.net/dth/84e832cc-b853-40d1-bcf9-bd0d2aae2bec.sized-1000x1000.png?w=1000" 
                alt="" 
             />
             <h1 className="singlePostTitle">
                 Lorem ipsum dolor sit amet.
                 <div className="singlePostEdit">
                    <i class="singlePostIcon far fa-edit"></i>
                    <i class="singlePostIcon far fa-trash-alt"></i>
                 </div>
             </h1>
             <div className="singlePostInfo">
                 <span className="singlePostAuthor">Author: <b>Ashley Thorlin</b></span>
                 <span className="singlePostDate">1 hour ago</span>
             </div>
             <p className="singlePostDesc">
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, sunt unde! 
                 Cumque quibusdam doloremque dolorum soluta obcaecati laborum accusantium 
                 assumenda tempora ex nostrum unde laboriosam officia, recusandae libero a 
                 quaerat.Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, sunt unde! 
                 Cumque quibusdam doloremque dolorum soluta obcaecati laborum accusantium 
                 assumenda tempora ex nostrum unde laboriosam officia, recusandae libero a 
                 quaerat.Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, sunt unde! 
                 Cumque quibusdam doloremque dolorum soluta obcaecati laborum accusantium 
                 assumenda tempora ex nostrum unde laboriosam officia, recusandae libero a 
                 quaerat.Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, sunt unde! 
                 Cumque quibusdam doloremque dolorum soluta obcaecati laborum accusantium 
                 assumenda tempora ex nostrum unde laboriosam officia, recusandae libero a 
                 quaerat.
             </p>
        </div>
    </div>
  )
}
