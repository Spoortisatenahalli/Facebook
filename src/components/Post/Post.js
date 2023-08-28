import React, { useState } from 'react'
import "./Post.css"
import { MoreVert } from '@material-ui/icons'
import {Users} from "./../../Dummydata.js"

const Post = ({post}) => {

  const[like, setLike] =useState(post.like)
  const[isLiked , setIsLiked] =useState(false)

  const likeHandler=()=>{
    setLike(isLiked ? like+2 : like+1)
    setIsLiked(!isLiked) 
  }

  const user= Users.filter(u=>u.id===1)
  console.log("userdetails" ,user[0].username);
  console.log("Mypost" , post);
  return (
    <div className='post'>
       <div className='postWrapper'>
       <div className='postTop'>
         <div className='postTopLeft'>
            <img className='postprofileImg' src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt=''/>
            <span className='postUsername'>{Users.filter((u) => u.id === post.userId)[0].username}</span>
            <span className='postDate'>{post.date}</span>
         </div>
         <div className='postTopRight'>
            <MoreVert/>
         </div>
       </div>
        <div className='postCenter'>
            <span className='postText'>{post.desc}</span>      
            <img className="postImg" src={post.photo} alt=""/>
        </div> 
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img className="likeIcon" src="/Assets/Post/heart.png" onClick={likeHandler} alt=""/>
            <img className='likeIcon' src="/Assets/Post/like.png" onClick={likeHandler} alt=""/>
            <span className='postLikeConter'> {like} People like it</span>
           </div>
          <div className='postBottomRight'></div>
              <span className='postCommentText'>{post.comment} Comments</span>
          </div> 
       </div>
    </div>
  )
}

export default Post